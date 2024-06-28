import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import ReduxSagaFirebase from "redux-saga-firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATI_MQi0y6Kvke5BFeYvaOhPhQ3BEBLAQ",
  authDomain: "hotel-app-d6b44.firebaseapp.com",
  databaseURL: "https://hotel-app-d6b44-default-rtdb.firebaseio.com",
  projectId: "hotel-app-d6b44",
  storageBucket: "hotel-app-d6b44.appspot.com",
  messagingSenderId: "1077353399315",
  appId: "1:1077353399315:web:047a8eb25ac9dd4012ebe6",
  measurementId: "G-FYYX8NMRHV",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = getAuth(app);

export const rsf = new ReduxSagaFirebase(app);
