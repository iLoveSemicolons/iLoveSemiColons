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
                        {props.title}
                    </div>


                    <div className="readButtonContainer">
                        <ReadArticleButton
                            title={props.title}
                            sourceLink={props.sourceLink}
                            hashtags={props.hashtags}
                            datePosted={props.datePosted}
                        />
                    </div>
                </div>
                <div className="articleCellHashtagContainer">
                    <Hashtag hashtags={props.hashtags}/>
                </div>
            </div>
        </div>
    );
}

