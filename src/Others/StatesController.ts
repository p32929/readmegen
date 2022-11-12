import { state, action, createStore } from 'usm-redux';
import { compose } from 'redux';
import { IElementTypes } from './GlobalVars';

export interface IElement {
    name: IElementTypes,
    data: any
}

export interface IState {
    isAdderDialogShowing: boolean,
    elements: Array<IElement>
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
        elements: [
            {
                name: "Title and Descriptions",
                data: {
                    "title": "Hello world",
                    "descriptions": "great descriptions"
                }
            }
        ]
    }

    @action
    setState(newState: Partial<IState>) {
        this.states = {
            ...this.states,
            ...newState
        }
    }

    @action
    addElement(elementName: IElementTypes) {
        this.states.elements.push({
            name: elementName,
            data: {}
        })
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