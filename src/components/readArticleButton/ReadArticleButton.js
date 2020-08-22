import React from "react";
import "./readArticleButton.scss";
import {Route, useHistory} from "react-router";
import Article from "../../article";
import {BrowserRouter, Link, NavLink} from "react-router-dom";
import blog from "../../blog";
import Project from "../../project";


/*
export default class ReadArticleButton extends React.Component{
    constructor(props) {
        super(props);
    }
    handleClick(){
        let history = useHistory();
        history.push("/project");
    }

    render(){
        const backURL  = "some data maybe ?";
        const testValue = "hello";
        console.log('here is the read article button');
        return(
            <div>

                <button onClick={this.handleClick} className="ReadArticleButton">Lire</button>

                {/!*                <Link to={{
                    pathname: `/article/:${testValue}`,
                    query:{backURL}
                }}>
                    <button className="ReadArticleButton">Lire</button>
                </Link>*!/}

            </div>
        );
    }
}*/
export default function ReadArticleButton(props) {


    /*
        let history = useHistory();
        function handleClick() {
            //http://localhost:3000/article'/articles/js-talks.html'
            history.push("/article/"+props.sourceLink);
        }

    */


    const sourceLink = props.sourceLink;
    return (
        <div>

            {/*<button onClick={handleClick} className="ReadArticleButton">Lire</button>*/}

            <Link to={{
                pathname: `/article/${sourceLink}`,
                state: {
                    title: `${props.title}`,
                    datePosted:`${props.datePosted}`,
                    hashtags:`${props.hashtags}`,

                }
            }}>
                <button className="ReadArticleButton">Lire</button>
            </Link>

        </div>
    );
}