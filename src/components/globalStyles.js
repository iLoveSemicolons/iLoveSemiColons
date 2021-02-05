import {createGlobalStyle} from "styled-components";
export const GlobalStyles = createGlobalStyle`

body{
background : ${({theme}) => theme.body};
 }


.introTitle , .introText{
color : ${({theme}) => theme.introTitleTextColor};
}

.homePageIntroRightContainer {
background : ${({theme}) => theme.homePageIntroRightContainerBackgroundColor};
color : ${({theme}) => theme.homePageIntroRightContainerColor};
}

.rightContainerText{
color : ${({theme}) => theme.homePageIntroRightContainerColor};
}


.hashtagText{
background : ${({theme}) => theme.hashtagTextBackgroundColor}
}

.pageTitle{
color : ${({theme}) => theme.pageTitleTextColor}
}
`