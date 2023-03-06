import React from 'react';
import style from './section.module.css'
import SectionHeader from "./SectionHeader/SectionHeader";

const Section = ({children,name, add, setAdd}) => {
    return (
        <div className={style.wrapper}>
            <SectionHeader add={add} setAdd={setAdd}>{name}</SectionHeader>
            <div className={style.container}>
                {children}
            </div>
        </div>
    );
};

export default Section;