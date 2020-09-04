import React from 'react';
import style from './sunMoon.module.scss';

export default function Moon() {
    return (
        <img src={'/moon.svg'} alt="moon icon" className={style.sunMoon}/>
    );
}