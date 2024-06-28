import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import { rememberUser } from "./rememberUser";

type Action = {
  email: string;
  password: string;
  remember: boolean;
};

export const signInAccountApi = async (action: { payload: Action }) => {
  try {
    const { email, password, remember } = action.payload;
    const result = await signInWithEmailAndPassword(auth, email, password).then(
      ({ user }) => user
    );
    console.log(remember);
    if (remember) {
      rememberUser(email);
    }
    return result;
  } catch (error) {
    return error;
  }
};
