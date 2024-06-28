import React from "react";
import { TModal } from "./types";

export const Modal = ({ showModal, closeModal, children }:TModal) => {
    
    return (
      <div className={`modal ${showModal ? 'show' : 'hide'}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          {children}
        </div>
      </div>
    );
  };