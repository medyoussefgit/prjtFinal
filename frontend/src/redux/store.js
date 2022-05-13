import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from './reducer/index';

const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), devTools));