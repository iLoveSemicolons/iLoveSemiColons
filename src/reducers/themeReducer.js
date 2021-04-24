import {theme} from '../components/themes'

export const initialThemeState = {
    currentTheme: theme.darkTheme
}


export function themeReducer(themeState, action) {


    switch (action.type) {
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