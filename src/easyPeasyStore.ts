import {
    Action,
    action,
} from 'easy-peasy';

interface CounterState {
    count: number
}

interface CounterActions {
    increaseBy: Action<CounterModel, number>
}

export type CounterModel = CounterState & CounterActions

export const counterModel: CounterModel = {
    count: 0,
    increaseBy: action((state, payload) => {
        state.count += payload;
    }),
}
