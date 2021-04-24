import React from "react";
import "./articleCell.scss";
import ReadArticleButton from "../readArticleButton/ReadArticleButton";
import Hashtag from "../hashtag/hashtag";
import Likes from "../likes/likes";
import styled from "styled-components";


const ArticleCellTitle = styled.div`
        color : ${({theme}) => theme.articleCellTitleTextColor};
    `;

const ArticleCellStyled = styled.div`
        background-color : ${({theme}) => theme.articleCellBackgroundColor};
    `;
export  default function  ArticleCell (props){


    return (
        <div className="articleCellContainer">
            <ArticleCellStyled className="articleCell">
                <div className="articleCellTopSideContainer">
                    <ArticleCellTitle className="articleCellTitle">
                        <div>
                            {props.title}
                        </div>
                    </ArticleCellTitle>


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

                <div className={"articleCellLikesContainer"}>
                    <Likes idPost={props.idPost} likes={props.likes}/>
                </div>
            </ArticleCellStyled>
        </div>
    );
}




/* import React from "react";
import "./articleCell.scss";
import ReadArticleButton from "../readArticleButton/ReadArticleButton";
import Hashtag from "../hashtag/hashtag";
import Likes from "../likes/likes";
import styled from "styled-components";


const ArticleCellTitle = styled.div`
        color : ${({theme}) => theme.articleCellTitleTextColor};
    `;

const ArticleCellStyled = styled.div`
        background-color : ${({theme}) => theme.articleCellBackgroundColor};
    `;
export  default function  ArticleCell (props){


    return (
        <div className="articleCellContainer">
            <ArticleCellStyled className="articleCell">
                <div className="articleCellTopSideContainer">
                    <ArticleCellTitle className="articleCellTitle">
                        <div>
                            {props.title}
                        </div>
                    </ArticleCellTitle>


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

                <div className={"articleCellLikesContainer"}>
                    <Likes idPost={props.idPost} likes={props.likes}/>
                </div>
            </ArticleCellStyled>
        </div>
    );
}

 */