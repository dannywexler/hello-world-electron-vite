import { createModel, init, Models, RematchDispatch, RematchRootState } from "@rematch/core";
import immerPlugin from "@rematch/immer"
export interface RootModel extends Models<RootModel> {
    count: typeof countModel
}

export const countModel = createModel<RootModel>()({
    state: {
        count: 0,
        some: {
            deeply: {
                nesting: {
                    item: true
                }
            }
        },
    },
    reducers: {
        increment(state, payload: number) {
            state.count += payload;
            state.some.deeply.nesting.item = !state.some.deeply.nesting.item
        },
    },
    effects: (dispatch) => ({
        async incrementAsync(payload: number, state) {
            console.log("This is current root state", state);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch.increment(payload);
        },
    }),
});

export const models: RootModel = { count: countModel }

export const store = init({
    name: 'Counter store',
    models,
    plugins: [immerPlugin()],
    redux: {
        devtoolOptions: {
            trace: true
        }
    }
});

export const countActions = store.dispatch.count

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
