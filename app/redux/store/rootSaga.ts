import { takeEvery } from "redux-saga/effects";
import {
  getSignInAccountsRequest,
  getSignUpAccountsRequest,
} from "./reducers/accountsSlice";
import { signUpAccountsSaga } from "./reducers/sagas/signUpAccountsSaga";
import { signInAccountsSaga } from "./reducers/sagas/signInAccountsSaga";
import { getRoomsRequest } from "./reducers/roomsSlice";
import { getRoomsSaga } from "./reducers/sagas/roomSaga";

export function* rootSaga() {
  yield takeEvery(getSignUpAccountsRequest, signUpAccountsSaga);
  yield takeEvery(getSignInAccountsRequest, signInAccountsSaga);
  yield takeEvery(getRoomsRequest, getRoomsSaga);
}
