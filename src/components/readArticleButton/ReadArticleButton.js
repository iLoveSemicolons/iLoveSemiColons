import React from "react";
import "./readArticleButton.scss";


export default function ReadArticleButton(props) {
    return (
        <div>
            <a href={props.articleLink} >
                <button className="ReadArticleButton">Lire</button>
            </a>
        </div>
    );

}