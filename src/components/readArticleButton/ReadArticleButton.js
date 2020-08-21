import React from "react";
import "./readArticleButton.scss";
import {Route} from "react-router";
import Article from "../../article";
import {BrowserRouter, Link, NavLink} from "react-router-dom";
import blog from "../../blog";
import Project from "../../project";


export default function ReadArticleButton (props) {

    const backURL  = "someurl";
    const testValue = "hello";
        return (
            <div>

                {/*<button className="ReadArticleButton">Lire</button>*/}


                <Link to={{
                    pathname: `/article/${testValue}`,
                    query:{backURL}
                }}>
                    <button className="ReadArticleButton">Lire</button>
                </Link>


            </div>
        );


}