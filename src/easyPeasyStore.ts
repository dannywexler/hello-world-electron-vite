import {
    Action,
    action,
} from 'easy-peasy';

interface CounterState {
    count: number,
}

interface CounterActions {
    increaseBy: Action<CounterModel, number>,
}

interface NestedItems {
    nested: NestedState & NestedActions
}

interface NestedState {
    some: {
        deeply: {
            nesting: {
                item: boolean
            }
        }
    }
}

interface NestedActions {
    nestedToggle: Action<NestedState, boolean>
}

export type CounterModel = CounterState & CounterActions & NestedItems

export const counterModel: CounterModel = {
    count: 0,

    increaseBy: action((state, payload) => {
        state.count += payload;
    }),
    nested: {
        some: {
            deeply: {
                nesting: {
                    item: true
                }
            }
        },
        nestedToggle: action((state, payload) => {
            state.some.deeply.nesting.item = !state.some.deeply.nesting.item
        })
    }
}
