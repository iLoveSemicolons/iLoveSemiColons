import React from "react";
import Styles from "./showAll.module.scss";
import styled from "styled-components";
import {NavLink} from "react-router-dom";




const ShowAllButton = styled.div`

background  : ${({theme}) => theme.showAllButtonBackgroundColor};
color: ${({theme}) => theme.showAllButtonColor};
`;


export default function ShowAll(props) {
    return (
        <div className={Styles.showAllContainer}>
            <ShowAllButton className={Styles.showAll}>
                <NavLink to={props.goTo}>{props.text}</NavLink>
            </ShowAllButton>
        </div>
    );
}