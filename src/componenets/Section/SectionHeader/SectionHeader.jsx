import React from 'react';
import style from './sectionHeader.module.css'
import plus from '../../../assets/svg/plus.svg';

const SectionHeader = ({children, add = false, setAdd}) => {
    return (
        <div className={style.wrapper}>
            <span className={style.header}>{children}</span>
            {add && <div className={style.ellipse}  onClick={setAdd}>
                <img className={style.plus} src={plus} alt=""/>
            </div>}
        </div>
    );
};

export default SectionHeader;