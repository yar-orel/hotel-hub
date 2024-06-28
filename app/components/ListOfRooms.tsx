import React from "react";
import ItemRoom from "./ItemRoom";
import { TRooms } from "./types";

export const ListOfRooms = ({ rooms, roomId, freeRooms }: TRooms) => {
  return (
    <>
      {
        rooms.length > 0
        &&
        ((freeRooms) ?
          rooms.filter((freeRoom) => freeRoom.guest === '').map((room: any, id: number) => (
            <ItemRoom room={room} roomId={roomId} id={id}  key={room.number * Math.random()} />
          ))
          :
          rooms.map((room: any, id: number) => (
            <ItemRoom room={room} roomId={roomId} id={id} key={room.number * Math.random()} />
          )))
      }
    </>
  );
};
