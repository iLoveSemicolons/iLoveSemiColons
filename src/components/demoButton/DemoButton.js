import React from "react";
import "./demoButton.scss";


import styled from "styled-components";


const DemoProjectButton = styled.button`

border-color : ${({theme}) => theme.demoProjectButtonBorderColor};
color : ${({theme}) => theme.demoProjectButtonTextColor};

&:hover {
    background-color : ${({theme}) => theme.demoProjectButtonBackgroundColorOnHover};
    color : ${({theme}) => theme.demoProjectButtonTextColorOnHover};
}

`;


export default function DemoButton(props) {
    return (
        <div>
            <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
                <DemoProjectButton className="demoLinkButton">{props.buttonValue}</DemoProjectButton>
            </a>
        </div>
    );

}