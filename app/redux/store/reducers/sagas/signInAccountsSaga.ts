import { put } from "redux-saga/effects";
import { setAccountsError, setAccountsSuccess } from "../accountsSlice";
import { signInAccountApi } from "./../../../signInAccountApi";

type Action = {
  payload: {
    email: string;
    password: string;
  };
};

export function* signInAccountsSaga(action: Action) {
  try {
    // @ts-ignore
    const payload = yield signInAccountApi(action);
    yield put(setAccountsSuccess(payload));
  } catch (error) {
    yield put(setAccountsError({ error: String(error) }));
  }
}
