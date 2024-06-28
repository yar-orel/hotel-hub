import { useEffect } from "react";
import { getRoomsRequest } from "../redux/store/reducers/roomsSlice";
import { useAppDispatch } from "../hooks";
import { getStateRooms } from "../redux/store/selectors";
import { useAppSelector } from "../hooks";

export const useGetRooms = () => {
  const { rooms } = useAppSelector(getStateRooms);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRoomsRequest());
  }, [dispatch]);
  return rooms;
};
