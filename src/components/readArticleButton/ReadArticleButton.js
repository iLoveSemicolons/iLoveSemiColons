import React from "react";
import "./readArticleButton.scss";

import {Link} from "react-router-dom";




export default function ReadArticleButton(props) {

    const sourceLink = props.sourceLink;
    return (
        <div>
            <Link to={{
                pathname: `/article/${sourceLink}`,
/*                state: {
                    title: `${props.title}`,
                    datePosted:`${props.datePosted}`,
                    hashtags:`${props.hashtags}`,
                }*/
            }}>
                <button className="ReadArticleButton">Lire</button>
            </Link>

        </div>
    );
}