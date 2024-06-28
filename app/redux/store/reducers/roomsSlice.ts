import { IRooms } from "../../../module";
import { createAction, createSlice } from "@reduxjs/toolkit";

interface RoomsState {
  rooms: IRooms[];
  isLoading: boolean;
  error?: string;
}

const initialState: RoomsState = {
  rooms: [],
  isLoading: false,
  error: "",
};

export const roomSlice: any = createSlice({
  name: "room",
  initialState,
  reducers: {
    getRoomsRequest: (state) => {
      state.isLoading = true;
    },
    getRoomsSuccess: (state, action) => {
      state.rooms = action.payload;
      state.isLoading = false;
    },
    getRoomsFailure(state, action) {
      console.log(action.payload);
      (state.error = action.payload), (state.isLoading = false);
    },
  },
});

export const { getRoomsSuccess, getRoomsFailure, getRoomsRequest } =
  roomSlice.actions;

export default roomSlice.reducer;
