import { MouseEventHandler } from "react";
export type TRoom = {
    docId: number;
    number: number;
    type: string;
    occupancy: number;
    price: number;
    guest: string;
    description: string,
    gallery: Array<string>,
    features: Array<string>
  };

export type TItemRoom = {
  room: TRoom
  id: number;
  roomId: string;
};

export type TRooms = {
  freeRooms: boolean;
  rooms: Array<TRoom>;
  roomId: string;
};

export type TModal = {
  showModal: boolean;
  closeModal:MouseEventHandler<HTMLSpanElement>;
  children: React.ReactNode;
};

