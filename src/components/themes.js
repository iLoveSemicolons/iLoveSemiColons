const globalColorStyling = {

    colorWhite: "#D4D4D4",
    colorWhiter: "#EEEEEE",
    colorGrey: "#B3B9C5",
    colorGreyBlue: "#848991",
    colorTrueGray: "#4D5055",
    colorDarkGray: "#707070",
    colorBlue: "#009EFF",
    colorBluer: "#1B7CD1",
    colorYellow: "#FFE087",
    colorYellower: "#FCC21B",
    colorBlack: "#202020",
    colorBlacker: "#1A1A1A",
}


const lightTheme = {
    id: "light",
    body: globalColorStyling.colorWhite,
    header: globalColorStyling.colorWhite,

    introTitleTextColor: globalColorStyling.colorBlack,


    homePageIntroRightContainerBackgroundColor: globalColorStyling.colorGreyBlue,
    homePageIntroRightContainerColor: globalColorStyling.colorWhiter,

    CellBorderBottom: globalColorStyling.colorGrey,

    cellTitleColor: globalColorStyling.colorBlack,

    projectResumeColor: globalColorStyling.colorTrueGray,

    hashtagTextBackgroundColor: globalColorStyling.colorGrey,


    showAllButtonBackgroundColor: globalColorStyling.colorBluer,
    showAllButtonColor: globalColorStyling.colorWhiter,


    headerBackgroundColor: globalColorStyling.colorWhite,
    headerLeftContentUnderLiningColor: globalColorStyling.colorTrueGray,


    readButtonBorderColor : globalColorStyling.colorYellower,
    readButtonTextColor : globalColorStyling.colorBlack,

    demoProjectButtonBorderColor : globalColorStyling.colorBluer,
    demoProjectButtonTextColor : globalColorStyling.colorBlack,

}

const darkTheme = {
    id: "dark",

    headerBackgroundColor: globalColorStyling.colorBlack,
    headerLeftContentUnderLiningColor: globalColorStyling.colorWhite,


    showAllButtonBackgroundColor: globalColorStyling.colorBlacker,
    showAllButtonColor: globalColorStyling.colorBluer,


    readButtonBorderColor : globalColorStyling.colorYellow,
    readButtonTextColor : globalColorStyling.colorWhite,


    demoProjectButtonBorderColor : globalColorStyling.colorBluer,
    demoProjectButtonTextColor : globalColorStyling.colorWhite,

}


export const theme = {darkTheme, lightTheme};
