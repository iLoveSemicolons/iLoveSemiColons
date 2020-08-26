import React from "react";
import "./readArticleButton.scss";

import {Link} from "react-router-dom";



//TODO sending only the source link, it will then search for the source link in the data base and get the whole information


export default function ReadArticleButton(props) {

    const sourceLink = props.sourceLink;
    return (
        <div>
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