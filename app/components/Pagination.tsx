import React from "react";

export const Pagination = ({ roomsPerPage, totalRooms, paginate }: { roomsPerPage: any, totalRooms: any, paginate: any }) => {
    const pageNumbers = Array.from({ length: Math.ceil(totalRooms / roomsPerPage) }, (_, index) => index + 1);

    return (
        <ul className="pagination-list">
            {pageNumbers.map(number => (
                <li className="page-item" key={number}>
                    <button className="btn btn_pagination" onClick={() => paginate(number)}>
                        {number}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;
