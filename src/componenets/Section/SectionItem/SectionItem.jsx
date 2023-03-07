import React from 'react';
import cart from '../../../assets/svg/cart.svg';
import style from './sectionItem.module.css';

const SectionItem = ({check, text, onDelete, id, onEdit, isCheck = false}) => {
    return (
        <div className={style.wrapper}>
            {isCheck &&
                <label className={style.container}>
                    <input className={style.check} value={check} type="checkbox" onClick={() => onEdit(id)}/>
                    <span className={style.checkmark}></span>
                </label>}
            <span className={style.text}>{text}</span>
            <img src={cart} alt="" onClick={() => onDelete(id)}/>
        </div>
    );
};

export default SectionItem ;