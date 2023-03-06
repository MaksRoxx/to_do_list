import React from 'react';
import cart from '../../../assets/svg/cart.svg';
import style from './sectionItem.module.css';

const SectionItem = ({check, text, onDelete, onEdit, isCheck = false}) => {
    return (
        <div className={style.wrapper}>
            {isCheck && <input className={style.check} value={check} type="checkbox" onClick={() => onEdit(text)}/>}
            <span className={style.text}>{text}</span>
            <img src={cart} alt="" onClick={() => onDelete(text)}/>
        </div>
    );
};

export default SectionItem ;