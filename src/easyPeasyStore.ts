import {
    Action,
    Computed,
    Thunk,
    action,
    computed,
    createStore,
    createTypedHooks,
    persist,
    thunk,
} from 'easy-peasy';

export interface CounterModel {
    count: number
    increaseBy: Action<CounterModel, number>
}

export const store = createStore<CounterModel>(persist(
    {
        count: 0,
        increaseBy: action((state, payload) => {
            state.count += payload;
        }),
    }),
    {
        devTools: true
    }
);


const typedHooks = createTypedHooks<CounterModel>();

export const myActions = typedHooks.useStoreActions;
export const myDispatch = typedHooks.useStoreDispatch;
export const myState = typedHooks.useStoreState;
