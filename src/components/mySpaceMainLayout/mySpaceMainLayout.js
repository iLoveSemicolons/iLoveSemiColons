import React from "react";
import style from "./mySpaceMainLayout.module.scss";

export default function MySpaceMainLayout({children}){
    return(
        <div className={style.mainLayout}>
            {children}
        </div>
    );
}