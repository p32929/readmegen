import { state, action, createStore } from 'usm-redux';
import { compose } from 'redux';

export interface IState {
    isAdderDialogShowing: boolean
}

const composeEnhancers =
    // @ts-ignore
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

export class Controller {
    @state
    states: IState = {
        isAdderDialogShowing: false,
    }

    @action
    setState(newState: Partial<IState>) {
        this.states = {
            ...this.states,
            ...newState
        }
    }
}

export const controller = new Controller();

export const store = createStore(
    {
        modules: [controller],
    },
    undefined,
    {
        reduxEnhancer: composeEnhancers(),
    }
);