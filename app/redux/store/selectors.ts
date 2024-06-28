import { createSelector } from 'reselect';
import {RootState} from "../store/store";

export const getStateAccounts = (state: RootState) => state.accountReducer;
export const getAccounts = createSelector(
    getStateAccounts,
    account => account.accounts
);

export const getStateRooms = (state: RootState) => state.roomsReducer;
export const getRooms = createSelector(
    getStateRooms,
    room => room.rooms
);