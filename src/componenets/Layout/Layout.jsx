import React from 'react';
import style from './layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <span className={style.zag}>TO DO LIST</span>

                {children}
            </div>
        </div>
    );
};

export default Layout;