import Link from "next/link"
import { TItemRoom} from "./types"
import React from "react"

export default function ItemRoom({room, roomId, id}:TItemRoom){
    return(
        <tr className="table-tr table-tr_light">
        <td className="table__item">{room.number}</td>
        <td className="table__item">{room.type}</td>
        <td className="table__item">{room.occupancy}</td>
        <td className="table__item table__item_center">{room.price + '$'}</td>
        <td className="table__item table__item_left">{room.guest}</td>
        <td className="table__item table__item_right">
          <Link className="item__link" href={`/rooms/${roomId[id]}`}>
            <button className="btn btn_item">
              More information
            </button>
          </Link>
        </td>
      </tr>
    )
}