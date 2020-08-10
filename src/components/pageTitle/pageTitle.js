import React from "react";
import "./pageTitle.scss";


export default function PageTitle(props){
    return (

        <div className="pageTitle">
            {props.title}
        </div>
    );
}