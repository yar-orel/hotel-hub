import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import { rememberUser } from "./rememberUser";

type Action = {
  email: string;
  password: string;
  remember: boolean;
};

export const signUpAccountApi = async (action: { payload: Action }) => {
  const { email, password, remember } = action.payload;
  if (remember) {
    rememberUser(action.payload.email);
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User registered successfully:");
    return userCredential.user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
