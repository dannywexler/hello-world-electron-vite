import { createModel, init, Models, RematchDispatch, RematchRootState } from "@rematch/core";
export interface RootModel extends Models<RootModel> {
    count: typeof count
}

export const count = createModel<RootModel>()({
    state: 0,
    reducers: {
        increment(state, payload: number) {
            return state + payload;
        },
    },
    effects: (dispatch) => ({
        async incrementAsync(payload: number, state) {
            console.log("This is current root state", state);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch.count.increment(payload);
        },
    }),
});

export const models: RootModel = { count }

export const store = init(
    {
        name: 'Counter store',
        models,
    }
);

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
