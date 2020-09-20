import {createGlobalStyle} from "styled-components";
export const GlobalStyles = createGlobalStyle`

body{
background : ${({theme}) => theme.body};
 }


.header {
background : ${({theme}) => theme.header};
}

.introTitle , .introText{
color : ${({theme}) => theme.introTitleTextColor};
}

.homePageIntroRightContainer {
background : ${({theme}) => theme.homePageIntroRightContainerBackgroundColor}
}


.articleCellContainer , .projectCellContainer{
border-bottom-color : ${({theme}) => theme.CellBorderBottom}
}

.articleCellTitle , .projectCellTitle{
color : ${({theme}) => theme.cellTitleColor}
}

.projectResume{
color : ${({theme}) => theme.projectResumeColor}
}

.hashtagText{
background : ${({theme}) => theme.hashtagTextBackgroundColor}
}

`