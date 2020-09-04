import React from 'react';
import style from './sunMoon.module.scss';

export default function Sun() {
    return (
        <img src={'/sun.svg'} alt="sun icon" className={style.sunMoon}/>
    );
}