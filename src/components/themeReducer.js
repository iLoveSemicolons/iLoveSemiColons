import React from 'react'


import {theme} from './themes'

export const initialThemeState = {
    currentTheme: theme.darkTheme
}


export function themeReducer(themeState, action) {


    switch (action.type) {
        case "setTheme":
            return {
                //...themeState,
                currentTheme: action.value};


        case "updateTheme":
            return {
                //...themeState,
                currentTheme: {...theme[themeState.currentTheme.id], ...action.value}
            };
        case "toggleTheme" : {
            const newTheme = themeState.currentTheme.id === "dark" ? "lightTheme" : "darkTheme";


            return {
                //...themeState,
                currentTheme: theme[newTheme],
            };
        }


        default:
            throw new Error();
    }
}