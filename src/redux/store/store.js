import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { catsReducer } from "../reducers/catsReducer";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducersEnviar = combineReducers({
  login: loginReducer,
  register: registerReducer,
  cats: catsReducer,
});

export const store = createStore(
  reducersEnviar,
  composeEnhancers(applyMiddleware(thunk))
);
