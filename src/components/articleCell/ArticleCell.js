import React from "react";
import { Link } from "react-router-dom"
import "./articleCell.scss";
import Hashtag from "../hashtag/hashtag";
import Likes from "../likes/likes";
import styled from "styled-components";

const ArticleCellTitle = styled.div`
        color : ${({ theme }) => theme.articleCellTitleTextColor};
    `;

const ArticleCellStyled = styled.div`
        background-color : ${({ theme }) => theme.articleCellBackgroundColor};
    `;

export default function ArticleCell(props) {
    return (
        <div className="articleCellContainer">
            <ArticleCellStyled className="articleCell">
                <div><Link to={{ pathname: `/article/${props.sourceLink}` }}>
                    <img className={"picCellContainer"} src={`/articles/${props.sourceLink.substring(0, props.sourceLink.length - 5)}/${props.sourceLink.substring(0, props.sourceLink.length - 5)}.webp`}
                        alt={"Sirage al dbiyat développeru web Lyon auteur de" + props.sourceLink}
                    />
                </Link>
                    <div className="articleCellTopSideContainer">
                        <Link to={{ pathname: `/article/${props.sourceLink}` }}>
                            <ArticleCellTitle className="articleCellTitle">
                                    {props.title}
                            </ArticleCellTitle>
                        </Link>
                    </div>
                    <div className="articleCellHashtagContainer">
                        <Hashtag hashtags={props.hashtags} />
                    </div>
                </div>
                <div className={"articleCellLikesContainer"}>
                    <Likes idPost={props.idPost} likes={props.likes} />
                </div>
            </ArticleCellStyled>
        </div>
    );
}