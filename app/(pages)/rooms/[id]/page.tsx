'use client'
import Image from "next/image";

import { redirect, useRouter } from "next/navigation";
import { Modal } from "../../../components/Modal";
import { useEffect, useState } from "react";
import { CheckOut } from "../../../components/CheckOut";
import { CheckIn } from "../../../components/СheckIn";
import { TRoom } from "../../../components/types";
import { useGetRooms } from "../../../hooks/useGetRooms";

export type TDocument = {
    docId: string | null
    room: TRoom
}

export default function RoomPage(params: { params: { id?: string } }) {
    let slug = '';
    if (params.params && typeof params.params.id === 'string') {
        slug = params.params.id;
    }
    console.log(slug)
    if (!slug) {
        redirect('/error');
    }
    const router = useRouter();
    const [data, setData] = useState<React.ReactNode | null>(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [roomData, setRoomData] = useState({});

    const room = useGetRooms();
    const roomDetails = room.find((room: TDocument) => room.docId === slug);

    useEffect(() => {
        if (roomDetails) {
            setRoomData(roomDetails);
        }
    }, [roomDetails]);

    const openCheckIn = () => {
        setModalVisible(true);
        setData(<CheckIn roomId={slug} room={roomData} closeModal={setModalVisible} />)
    };

    const openCheckOut = () => {
        setModalVisible(true);
        setData(<CheckOut roomId={slug} room={roomData} closeModal={setModalVisible} />)
    }

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleBack = () => {
        router.push('/')
    }

    return (
        roomDetails
        &&
        <div className="room">
            <div className="container">

                <button onClick={handleBack} className="link__btn">
                    <span className="link__img">&lt;</span> Back Home
                </button>
                <div className="room-sides">
                    <div className="room-left">
                        <Image className="room" width={1018} height={561} src={roomDetails[slug].gallery[0]} alt="room" />
                        <div className="room-characteristics">
                            <h1 className="characteristics__header">Room {roomDetails[slug].number}</h1>
                            <ul className="characteristics-list">
                                <li><strong>Type:</strong> {roomDetails[slug].type}</li>
                                <li><strong>Occupancy:</strong> {roomDetails[slug].occupancy}</li>
                                <li><strong>Price:</strong> {roomDetails[slug].price}</li>
                                <li><strong>Guest:</strong> {roomDetails[slug].guest}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="room-right">
                        <div className="room-buttons">
                            <button className="btn btn_check-in" onClick={openCheckIn}>Check in</button>
                            <button className="btn btn_check-out" onClick={openCheckOut}>Check out</button>
                            <Modal showModal={modalVisible} closeModal={closeModal}>
                                {data}
                            </Modal>
                        </div>
                        <ul className="room-features">
                            <p className="features__header">Features:</p>
                            {roomDetails[slug].features.map((feature: TRoom['features']) => {
                                return (
                                    <li key={slug} className="features-item">{feature}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="room-down">
                    <div className="room-header room-header_description">
                        Desctiption:
                    </div>
                    <div className="room__description">
                        {roomDetails[slug].description}
                    </div>
                </div>
            </div>
        </div>
    )
}