import { createModel, init, Models, RematchDispatch, RematchRootState } from "@rematch/core";
import immerPlugin from "@rematch/immer"
import { useSelector } from "react-redux";

export const wait = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms))


export const countModel = createModel<RootModel>()({
    state: {
        currentCountValue: 0,
        some: {
            deeply: {
                nested: {
                    item: true
                }
            }
        },
    },
    reducers: {
        increment(countState, incrementBy: number) {
            countState.currentCountValue += incrementBy;
            countState.some.deeply.nested.item = !countState.some.deeply.nested.item
        },
    },
    effects: (dispatch) => ({
        async incrementAsync(incrementBy: number, countState) {
            await wait(2000)
            dispatch.increment(incrementBy);
        },
    }),
});

export interface RootModel extends Models<RootModel> {
    count: typeof countModel
}
export type RootState = RematchRootState<RootModel>;
export const models: RootModel = { count: countModel }

export const store = init({
    name: 'Counter store',
    models,
    plugins: [
        immerPlugin(),
    ],
    redux: {
        devtoolOptions: {
            trace: true
        }
    }
});

export const countActions = store.dispatch.count

export function useCountState () {
    return useSelector((state: RootState) => state.count)
}

export function useNestedState() {
    return useCountState().some.deeply.nested.item
}
