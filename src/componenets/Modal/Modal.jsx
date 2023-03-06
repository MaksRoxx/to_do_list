import React from 'react';
import style from './modal.module.css'

const Modal = ({children}) => {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    );
};

export default Modal;