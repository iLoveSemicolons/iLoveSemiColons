import React from "react";
import styled from "styled-components";
import Likes from "./components/likes/likes";
import Hashtag from "./components/hashtag/hashtag";
import {NavLink} from "react-router-dom";
import SubscribeBox from "./components/subscribeBox/SubscribeBox";


const ArticleContent = styled.div`
color : ${({theme}) => theme.articleContentTextColor};
`;

const ArticleTitle = styled.div`
color ${({theme}) => theme.articleTitleTextColor};
`;


const ArticleEstimatedReadingTime = styled.div`
color : ${({theme}) => theme.articleEstimatedReadingTimeTextColor};
`;


const DatePosted = styled.div`
color : ${({theme}) => theme.articleContentTextColor};
`;


export default class ArticleTesting extends React.Component {

    constructor(props) {
        super(props);

        this.articleLocalFileName = this.props.match.params.articleLocalFileName;
        this.articleSourceLink = '/articles/' + this.articleLocalFileName;
        this.state = {
            articleContent: ""
        }
    }


    fetchArticleContent() {
        const contentSourcePath = this.articleSourceLink;
        fetch(contentSourcePath)
            .then(response => response.text())
            .then(response => this.setState({articleContent: response}))
            .catch(function (error) {
                console.log(error);
            });
    }


    componentDidMount() {
        this.fetchArticleContent();
    }


    render() {
        const articleContent = {__html: this.state.articleContent};
        console.log(articleContent);
        return (

            <div className={"articleSupContainer"}>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
                </style>


                <div className={"articleTopContainer"}>
                    <ArticleTitle className="articleTitle">
                        Over-engineering your React app, the Orange juice approach
                    </ArticleTitle>

                    <div className={"articleLikesContainer"}>
                        <Likes idPost={0}/>
                    </div>

                    {/*write your Reading time here*/}
                    <ArticleEstimatedReadingTime className="estimatedReadingTime">
                        Reading Time : 4 min
                    </ArticleEstimatedReadingTime>

                    <DatePosted className="datePosted">
                        20/10/2020
                    </DatePosted>
                </div>


                <div className="articleHashtagContainer">
                    <Hashtag hashtags={"h1,h2"}/>
                </div>



                <ArticleContent className="articleContent" dangerouslySetInnerHTML={articleContent}/>


                <div className="articleSubTitleContainer">

                    <Likes idPost={0}/>


                    <div className="copyAndShareButtonContainer">
                        <button onClick={this.copyToClipboard} className="copyAndShareButton">
                            Copy link and share
                        </button>
                    </div>


                    <div className="goToBlogPageButtonContainer">
                        <NavLink to={"../../../blog"}>
                            <button className="goToBlogPageButton">View all my articles</button>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <SubscribeBox/>
                </div>

            </div>
        );
    }

}