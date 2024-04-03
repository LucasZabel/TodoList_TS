import './Modal.css';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

const Modal = ({ children }: Props) => {


    const closeModal = (e: React.MouseEvent): void => {
        e.preventDefault();
        const modal = document.querySelector("#modal");
        modal!.classList.add("hide");
    };


    return (
        <div id="modal" className='hide'>
            <div className='fade' onClick={closeModal}></div>
            <div className='modal'>
                {children}
                <button className='btn' onClick={closeModal}>Close edition</button>
            </div>
        </div>
    );
};

export default Modal;