import React from "react";
import { Link } from "react-router-dom"
import "./articleCell.scss";
import ReadArticleButton from "../readArticleButton/ReadArticleButton";
import Hashtag from "../hashtag/hashtag";
import Likes from "../likes/likes";
import styled from "styled-components";
import ArticleHeadPic from "../articleHeadPic/ArticleHeadPic"

const ArticleCellTitle = styled.div`
        color : ${({ theme }) => theme.articleCellTitleTextColor};
    `;

const ArticleCellStyled = styled.div`
        background-color : ${({ theme }) => theme.articleCellBackgroundColor};
    `;
export default function ArticleCell(props) {
    console.log(props.sourceLink.substring(0, props.sourceLink.length - 5));
    console.log(props.sourceLink);
    console.log(`/articles/${props.sourceLink.substring(0, props.sourceLink.length - 5)}/${props.sourceLink.substring(0, props.sourceLink.length - 5)}.webp`);


    return (
        <div className="articleCellContainer">
            <ArticleCellStyled className="articleCell">
                <ArticleHeadPic articleSourceLink={props.sourceLink} />
                <div className="articleCellTopSideContainer">
                    <Link to={{ pathname: `/article/${props.sourceLink}` }}>
                        <ArticleCellTitle className="articleCellTitle">
                            <div>
                                {props.title}
                            </div>
                        </ArticleCellTitle>
                    </Link>
                </div>
                <div className="articleCellHashtagContainer">
                    <Hashtag hashtags={props.hashtags} />
                </div>

                <div className={"articleCellLikesContainer"}>
                    <Likes idPost={props.idPost} likes={props.likes} />
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