import React, {useState} from "react";
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


//===========================================================
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/themes"


import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";

//===========================================================

function App(){
         return (
            <BrowserRouter>

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
            </BrowserRouter>
        );
}

ReactDOM.render(<App/>, document.getElementById('root'));