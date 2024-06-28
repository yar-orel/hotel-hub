import { fork } from "redux-saga/effects";
import { rsf } from "../../../../../firebase";

import { getRoomsFailure, getRoomsSuccess } from "../roomsSlice";
import { TRoom } from "../../../../components/types";

export function* getRoomsSaga() {
  yield fork(rsf.firestore.syncCollection, "room", {
    successActionCreator: getRoomsSuccess,
    failureActionCreator: getRoomsFailure,
    transform: (payload) => {
      const rooms = payload.docs.map((doc: any) => ({
        docId: doc.id,
        ...doc.data(),
      }));
      return rooms.sort((a: TRoom, b: TRoom) => a.number - b.number);
   
    },
  });
}
