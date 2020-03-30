import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import appSaga from "./saga";
import { rootReducer } from "./reducers/reducer";

export function initStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(appSaga);

  return store;
}
