import createSagaMiddleware from "redux-saga";
import { all, takeEvery, takeLatest } from "redux-saga/effects";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountReducer, { getSignInAccountsRequest, getSignUpAccountsRequest } from '../store/reducers/accountsSlice'
import roomsReducer from "./reducers/roomsSlice";
import { rootSaga } from "./rootSaga";

const rootReducer = combineReducers({
  accountReducer,
  roomsReducer,
});


export const setupStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware): any =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);

  return store;
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
