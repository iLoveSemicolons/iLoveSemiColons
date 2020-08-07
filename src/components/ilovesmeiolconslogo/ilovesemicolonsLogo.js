import React from "react"
import "./ilovesemicolonslogo.scss";
import {NavLink} from "react-router-dom";

export default function IlovesemicolonsLogo() {
    return (
        <div>
            <NavLink to={"../../../"}>
                <img src="/ilovesemicolonslogo.svg" alt="Vercel Logo" className="ilovesemicolonslogo"/>
            </NavLink>
        </div>
    )
}