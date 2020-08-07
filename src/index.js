import React from "react";
import ReactDOM from 'react-dom'
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Header from "./components/header/header";
import Project from "./project";
import Error from './components/Error';
import design from "./design";
import about from "./about";
import contact from "./contact";
import blog from "./blog";
import Home from "./home";
import "./App.scss"

function App() {
    return (
        <BrowserRouter>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
            </style>
            <Header/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/project" component={Project}/>
                <Route path="/design" component={design}/>
                <Route path="/blog" component={blog}/>
                <Route path="/about" component={about}/>
                <Route path="/contact" component={contact}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
