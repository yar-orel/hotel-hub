import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAccounts } from "../../../module";

interface AccountsState {
  accounts: IAccounts;
  isLoading: boolean;
  error?: string;
}

const initialState: AccountsState = {
  accounts: {
    email: null,
  },
  isLoading: false,
  error: "",
};

type TPayload = {
  email: string;
  password: string;
  remember: boolean;
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    getSignInAccountsRequest: (state, action: PayloadAction<TPayload>) => {
      state.isLoading = true;
    },
    getSignUpAccountsRequest: (state, action: PayloadAction<TPayload>) => {
      state.isLoading = true;
    },
    setAccountsSuccess: (state, action: PayloadAction<{ email: string }>) => {
      state.accounts.email = action.payload.email;
    },
    setAccountsError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
    removeAccount: (state) => {
      state.accounts = {
        email: null,
      };
      localStorage.removeItem("email");
    },
    authenticateUser: (state) => {
      const userEmail = localStorage.getItem("email");
      if (userEmail) {
        state.accounts = {
          email: userEmail,
        };
      }
    },
  },
});

export const {
  setAccountsSuccess,
  setAccountsError,
  removeAccount,
  authenticateUser,
  getSignInAccountsRequest,
  getSignUpAccountsRequest, 
} = accountSlice.actions;

export default accountSlice.reducer;
