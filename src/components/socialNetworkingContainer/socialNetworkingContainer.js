import React from "react";
import styled from "styled-components";
import Styles from "../../about.module.scss";
import SocialNetworkingButton from "../socialNetworkingButton/socialNetworkingButton";



const SubTitle = styled.div`

color : ${({theme}) => theme.NormalTextTextColor};
`;



export default function SocialNetworkingContainer() {

    return (
        <div>
            <SubTitle className={Styles.subTitle}>
                Follow Me :
            </SubTitle>

            <SocialNetworkingButton className={Styles.singleNetworkingButton}
                                    goTo={"https://twitter.com/iLoveSemicolon"}
                                    src={"twitterLogo.svg"}
                                    alt={"twitterLogo"}
                                    text="@iLoveSemicolon"
            />

            <SocialNetworkingButton className={Styles.singleNetworkingButton}
                                    goTo={"https://www.linkedin.com/in/sirage-al-dbiyat/"}
                                    src={"linkedinLogo.svg"}
                                    alt={"linkedIn logo"}
                                    text="Sirage Al dbiyat"
            />
            <SocialNetworkingButton className={Styles.singleNetworkingButton}
                                    goTo={"https://github.com/sirageDb"}
                                    src={"githubLogo.svg"}
                                    alt={"githubLogo"}
                                    text="sirageDb"
            />
        </div>
    );


}