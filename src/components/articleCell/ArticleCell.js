import React from "react";
import "./articleCell.scss";
import ReadArticleButton from "../readArticleButton/ReadArticleButton";
import Hashtag from "../hashtag/hashtag";


export default function ArticleCell(props) {
    return (

        <div className="articleCellContainer">
            <div className="articleCell">
                <div className="articleCellTopSideContainer">
                    <div className="articleCellTitle">
                        {props.articleTitle}
                    </div>

                    <div className="readButtonContainer">
                        <ReadArticleButton/>
                    </div>
                </div>
                <div className="articleHashtagContainer">
                    <Hashtag hashtagArray = {props.hashtagArray} />
                </div>
            </div>
        </div>
    );
}

