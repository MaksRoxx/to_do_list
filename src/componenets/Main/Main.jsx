import React from 'react';
import style from './main.module.css'

const Main = ({children}) => {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    );
};

export default Main;