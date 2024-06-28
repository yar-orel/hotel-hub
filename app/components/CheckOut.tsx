import React from "react";
import { db } from "../../firebase";

export const CheckOut = ({ roomId, room, closeModal }: any) => {
    const sendData = async (roomId: string) => {
        const roomDetails = room[roomId];
        const updatedRoomDetails = {
            number: roomDetails.number,
            type: roomDetails.type,
            occupancy: roomDetails.occupancy,
            isCheckedIn: false,
            checkInDate: null,
            price: roomDetails.price,
            guest: '',
            features: roomDetails.features,
            gallery: roomDetails.gallery,
            description: roomDetails.description,
            checkOutDate: null,
        };
        await db.collection('room').doc(roomId).update({
            [roomId]: updatedRoomDetails
        });
        closeModal(false);
    };

    const handleCancel = () => {
        closeModal(false);
    };

    const handleConfirm = () => {
        sendData(roomId);
    };

    return (
        <div className="check-out">
            <p className="check-in__header">Check out</p>
            <p className="check-out__text">Do you confirm to check out Room {room[roomId].number}?</p>
            <div className="check-in-buttons">
                <button className="btn_item check-in__btn_cancel" onClick={handleCancel}>
                    Cancel
                </button>
                <button className="btn_item check-in__btn_check-in" onClick={handleConfirm}>
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default CheckOut;
