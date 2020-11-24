import React from "react";
import style from "./crewMember.module.scss";

export default function CrewMember(props) {

    const handleClick = () => {
    }


    return (
        <label onClick={handleClick} className={style.crewMemberContainer}>
            <input type={"checkbox"} />
            <span className={style.checkMark}/>
            <div className={style.memberName}>
                {props.memberName}
            </div>
        </label>
    );
}