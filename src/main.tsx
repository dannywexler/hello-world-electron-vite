import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { 
    createStore,
    persist,
    createTypedHooks,
    StoreProvider,
} from 'easy-peasy';
import { counterModel, CounterModel } from './easyPeasyStore';
import App from './App'

const store = createStore<CounterModel>(persist(counterModel),
    {
        devTools: true
    }
);

const typedHooks = createTypedHooks<CounterModel>();

export const myActions = typedHooks.useStoreActions;
export const myDispatch = typedHooks.useStoreDispatch;
export const myState = typedHooks.useStoreState;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
