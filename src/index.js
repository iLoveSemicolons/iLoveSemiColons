import React, {createContext, useReducer, useState} from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Project from "./project";
import Error from './Error';
// import design from "./design";
import about from "./about";
import contact from "./contact";
import blog from "./blog";
import Home from "./home";
import article from "./article";
import "./App.scss"
import Subscribe from "./subscribe";

import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
//===========================================================

import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./components/globalStyles";
import {initialThemeState, themeReducer} from "./components/themeReducer";


//===========================================================

export const AppContext = createContext();

function App() {

    const [themeState, dispatch] = useReducer(themeReducer, initialThemeState);
    const {currentTheme} = themeState;


        return (
            <BrowserRouter>
                <ThemeProvider theme={currentTheme}>
                    <AppContext.Provider value={{...themeState, dispatch}}>
                        <GlobalStyles />

                            <PageLayout>
                                <MainLayout>

                                    <style>
                                        @import
                                        url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
                                    </style>
                                    <Switch>
                                        <Route path="/" component={Home} exact/>
                                        <Route path="/project" component={Project}/>
                                        {/*<Route path="/design" component={design}/>*/}
                                        <Route path="/blog" component={blog}/>
                                        <Route path="/about" component={about}/>
                                        <Route path="/contact" component={contact}/>
                                        <Route path="/subscribe" component={Subscribe}/>
                                        <Route path="/article/:articleLocalFileName" component={article}/>
                                        <Route component={Error}/>
                                    </Switch>
                                </MainLayout>
                            </PageLayout>
                    </AppContext.Provider>
                </ThemeProvider>
            </BrowserRouter>
        );
}


ReactDOM.render(
    <App/>
    , document.getElementById('root'));