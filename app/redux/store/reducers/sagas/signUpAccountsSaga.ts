import { put } from "redux-saga/effects";
import { signUpAccountApi } from "../../../signUpAccountApi";
import { setAccountsError, setAccountsSuccess } from "../accountsSlice";

type Action = {
  payload: {
    email: string;
    password: string;
    remember: boolean;
  };
};

export function* signUpAccountsSaga(action: Action) {
  try {
    yield signUpAccountApi(action);
    yield put(setAccountsSuccess(action.payload));
  } catch (error) {
    yield put(setAccountsError({ error: String(error) })); // Преобразование в строку
  }
}
