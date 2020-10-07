import React from "react";
import style from "./footer.module.scss";
import {Link} from "react-router-dom";

import styled from "styled-components";



const FooterContainer = styled.div`
background : ${({theme}) => theme.footerBackgroundColor};
color : ${({theme}) => theme.footerTextColor};
`;


const FooterLeftContentUpperLining = styled.div`
border-bottom-color : ${({theme}) => theme.footerLeftContentUpperLining};
`;

export default function Footer() {
    return (

        <FooterContainer className={style.footer}>
            <div className={style.footerContentContainerUpperLining}>
                <FooterLeftContentUpperLining className={style.footerLeftContentUpperLining}/>
                <div className={style.footerRightContentUpperLining}>
                    <div className={style.sunMoonUpperLining}/>
                    <div className={style.navIconUpperLining}/>
                </div>
            </div>

            <div className={style.footerContainer}>
                <div>
                    &copy; 2020 iLoveSemicolons.io
                </div>

                <div className={style.footerRightContainer}>
                    <div>
                        <Link to={"../../../contact"}>
                            Contact
                        </Link>
                    </div>
                    <div className={style.separator}>|</div>
                    <div>
                        <Link to={"../../../legalNotice"}>
                            Legal Notice
                        </Link>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
}