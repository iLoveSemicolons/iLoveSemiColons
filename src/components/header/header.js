import React from "react"
import Styles from "./header.module.scss"
import styled from "styled-components";
import NavIcon from "../navIcon/navIcon";
import IlovesemicolonsLogo from "../ilovesmeiolconslogo/ilovesemicolonsLogo";
import SunMoon from "../sunMoon/sunMoon"



//Styled component theme changing, the rest of styling is in the scss module file
//===============================================================================
const HeaderContainer = styled.div`
  background-color: ${({theme}) => theme.headerBackgroundColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  transition :0.3s; 
`;



//===============================================================================

export default function Header() {
    return (
        <HeaderContainer>
            <div className={Styles.headerContentContainer}>
                <div className={Styles.headerLeftContent}>
                    <IlovesemicolonsLogo/>
                </div>
                <div className={Styles.headerRightContent}>
                    <SunMoon/>
                    <NavIcon/>
                </div>
            </div>

            <div className={Styles.headerContentContainerUnderLining}>
                <div className={Styles.headerLeftContentUnderLining}/>
                <div className={Styles.headerRightContentUnderLining}>
                    <div className={Styles.sunMoonUnderLining}/>
                    <div className={Styles.navIconUnderLining}/>
                </div>
            </div>
        </HeaderContainer>
    );
}
