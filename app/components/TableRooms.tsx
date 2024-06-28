import React from 'react'
import {ListOfRooms} from '../components/ListOfRooms'
import { TRooms } from './types'
export default function TableRooms({rooms, roomId, freeRooms}:TRooms){
   return (
    <table className="main-table">
    <tbody>
        <tr className="table-tr table-tr_header">
            <th className="table__header">Number</th>
            <th className="table__header">Type</th>
            <th className="table__header">Occupancy</th>
            <th className="table__header table__header_center">Price</th>
            <th className="table__header table__header_left">Guest</th>
            <th className="table__header"></th>
        </tr>
        <ListOfRooms
        rooms={rooms} 
        roomId = {roomId}
        key={roomId}
        freeRooms={freeRooms}
        />
    </tbody>
</table>
   )
}