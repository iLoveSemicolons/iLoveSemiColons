import React from "react";
import "./articleCell.scss";
import ReadArticleButton from "../readArticleButton/ReadArticleButton";
import Hashtag from "../hashtag/hashtag";

//TODO spacing issue with ReadArticleButton
export default function ArticleCell(props) {
    return (

        <div className="articleCellContainer">
            <div className="articleCell">
                <div className="articleCellTopSideContainer">
                    <div className="articleCellTitle">
                        {props.articleTitle}
                    </div>

                    <div className="readButtonContainer">
                        <ReadArticleButton goToArticleLink={props.goToArticleLink}
                        />
                    </div>
                </div>
                <div className="articleCellHashtagContainer">
                    <Hashtag hashtags = {props.hashtags} />
                </div>
            </div>
        </div>
    );
}

