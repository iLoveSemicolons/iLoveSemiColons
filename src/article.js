import React from 'react'
import "./article.scss"
import Hashtag from "./components/hashtag/hashtag";
import { NavLink } from "react-router-dom";
import SubscribeBox from "./components/subscribeBox/SubscribeBox";
import Error from "./Error";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Likes from "./components/likes/likes";
import toBeUsedAddress from "../src/config/globalIP";
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";

//TODO copy to clipboard will make a notification window
//TODO add lazy loading for articles, article content should be gray lines
//TODO copy link icon instead of the big button ...
//TODO add comment feature


const ArticleTitle = styled.div`
color ${({ theme }) => theme.articleTitleTextColor};
`;

const ArticleContent = styled.div`
color : ${({ theme }) => theme.articleContentTextColor};
`;


const ArticleEstimatedReadingTime = styled.div`
color : ${({ theme }) => theme.articleEstimatedReadingTimeTextColor};
`;


const DatePosted = styled.div`
color : ${({ theme }) => theme.articleContentTextColor};
`;


export default class Article extends React.Component {

    constructor(props) {
        super(props);

        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.articleLocalFileName = this.props.match.params.articleLocalFileName;
        this.articleName = this.articleLocalFileName.substring(0, this.articleLocalFileName.length - 5);
        this.articleSourceLink = `/articles/${this.articleName}/${this.articleLocalFileName}`;

        this.state = {
            articleContent: "",
            articleAPIResponse: [],
            errorOccurred: false,
            linkCopied: false,
        }
    }


    callArticleAPI() {

        fetch(toBeUsedAddress.address + "/article", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"

            },
            body: JSON.stringify({
                articleLocalFileName: this.articleLocalFileName
            })
        })
            .then(response => response.json())

            //if there is no data from the api it will set the errorOccurred to true in order to show to 404Error page after the condition rendering
            .then((response) => {
                if (response.length === 0) {
                    this.setState({ errorOccurred: true });
                }
                return response;
            })
            .then(response => this.setState({ articleAPIResponse: response }))
            .catch(function (error) {
                console.log(error);
            })
    }

    fetchArticleContent() {
        const contentSourcePath = this.articleSourceLink;
        fetch(contentSourcePath)
            .then(response => response.text())
            .then(response => this.setState({ articleContent: response }))
            .catch(function (error) {
                console.log(error);
            });
    }


    articlePostDateReformatting(date) {
        date = date.slice(0, 10);
        date = date.split("-");

        const newDateFormat = [];
        newDateFormat.push(date[2]);
        newDateFormat.push("/");
        newDateFormat.push(date[1]);
        newDateFormat.push("/");
        newDateFormat.push(date[0]);

        return newDateFormat;
    }

    componentDidMount() {

        this.callArticleAPI();
        this.fetchArticleContent();

    }


    copyToClipboard() {
        let dummyLinkHolder = document.createElement("input"), text = window.location.href;
        document.body.appendChild(dummyLinkHolder);
        dummyLinkHolder.value = text;
        dummyLinkHolder.select();
        document.execCommand("copy");
        document.body.removeChild(dummyLinkHolder);
        this.setState({ linkCopied: true });
    }

    render() {

        const articleObject = this.state.articleAPIResponse;
        const articleContent = { __html: this.state.articleContent };
        const linkCopied = this.state.linkCopied;
        return (
            <PageLayout>
                <MainLayout>
                    <div className={"articleSupContainer"}>
                        {articleObject.map((article, id) =>
                            <div key={article.idPost}>

                                <Helmet>
                                    <title>{article.title}</title>
                                    {/*
                            <meta name={"description"} content={article.metaDescription}/>
                            <meta name={"keywords"} content={article.metaKeywords}/>
*/}
                                </Helmet>
                                <div className={"articleTopContainer"}>
                                    <img className={"picArticle"} src={`/articles/${this.articleName}/${this.articleName}.webp`}
                                        alt={"Sirage al dbiyat développeru web Lyon auteur de" + this.articleName}
                                    />
                                    <ArticleTitle className="articleTitle">
                                        {article.title}
                                    </ArticleTitle>

                                    <ArticleEstimatedReadingTime className="estimatedReadingTime">
                                        Reading Time : {article.estimatedReadingTime} min
                                    </ArticleEstimatedReadingTime>

                                    <DatePosted className="datePosted">
                                        {/*{article.datePosted.slice(0,10).replace("-","/")}*/}
                                        {this.articlePostDateReformatting(article.datePosted)}
                                    </DatePosted>

                                    <div className={"articleLikesContainer"}>
                                        <Likes idPost={article.idPost} />
                                    </div>


                                </div>

                                <div className="articleHashtagContainer">
                                    <Hashtag hashtags={article.hashtags} />
                                </div>

                                <ArticleContent className="articleContent" dangerouslySetInnerHTML={articleContent} />


                                <div className="articleSubTitleContainer">

                                    {/*<Likes idPost={article.idPost}/>*/}

                                    <div className="copyAndShareButtonContainer">
                                        {linkCopied
                                            ? <button className="copyAndShareButton">
                                                Copied
                                            </button>

                                            : <button onClick={this.copyToClipboard} className="copyAndShareButton">
                                                Copy link
                                            </button>
                                        }
                                    </div>

                                    <div className="goToBlogPageButtonContainer">
                                        <NavLink to={"../../../blog"}>
                                            <button className="goToBlogPageButton">View all my posts</button>
                                        </NavLink>
                                    </div>
                                </div>


                                <div>
                                    <SubscribeBox />
                                </div>

                            </div>
                        )}

                        {this.state.errorOccurred === true &&
                            <Error />
                        }

                    </div>
                </MainLayout>
            </PageLayout>
        );
    }
}