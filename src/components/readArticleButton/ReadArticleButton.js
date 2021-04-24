import React from "react";
import "./readArticleButton.scss";

import {Link} from "react-router-dom";
import styled from "styled-components";


const ReadButton = styled.button`

border-color : ${({theme}) => theme.readButtonBorderColor};
color : ${({theme}) => theme.readButtonTextColor};

&:hover {
    background : ${({theme}) => theme.readButtonBackgroundColorOnHover};
    color : ${({theme}) => theme.readButtonTextColorOnHover};
}
`;



export default function ReadArticleButton(props) {

    const sourceLink = props.sourceLink;
    return (
        <div>
            <Link to={{
                pathname: `/article/${sourceLink}`,
            }}>
                <ReadButton className="ReadArticleButton">Read</ReadButton>
            </Link>

        </div>
    );
}