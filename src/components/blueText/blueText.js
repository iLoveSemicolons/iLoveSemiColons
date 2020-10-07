import React from "react";


const spanStyle= {
    color: "#1B7CD1",
}

export default function BlueText(props) {
    return(
        <span style={spanStyle} className={"blueText"}>{props.text}</span>
    );
}