import React from "react";
import "./readArticleButton.scss";

import {Link} from "react-router-dom";
import styled from "styled-components";


const ReadButton = styled.button`

border-color : ${({theme}) => theme.readButtonBorderColor};
color : ${({theme}) => theme.readButtonTextColor};

`;



export default function ReadArticleButton(props) {

    const sourceLink = props.sourceLink;
    return (
        <div>
            <Link to={{
                pathname: `/article/${sourceLink}`,
/*                state: {
                    title: `${props.title}`,
                    datePosted:`${props.datePosted}`,
                    hashtags:`${props.hashtags}`,
                }*/
            }}>
                <ReadButton className="ReadArticleButton">Read</ReadButton>
            </Link>

        </div>
    );
}