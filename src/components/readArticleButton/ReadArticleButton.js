import React from "react";
import "./readArticleButton.scss";
import {Route} from "react-router";
import Article from "../article/article";
import {BrowserRouter, NavLink} from "react-router-dom";
import blog from "../../blog";


export default class ReadArticleButton extends React.Component {


    constructor(props) {
        super(props);
    }


    goToArticle(articleLink) {
    }


    render() {
        return (
            <div>
                {/*            <Route
                render={({history}) => (
                    <button onClick={() => {history.push("/blog/:id")}} className="ReadArticleButton">Lire</button>
                )}
            />*/}

                <button className="ReadArticleButton">Lire</button>

            </div>
        );

    }


}