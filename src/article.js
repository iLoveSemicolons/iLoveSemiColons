import React from 'react'
import "./article.scss"
import Hashtag from "./components/hashtag/hashtag";
import {NavLink} from "react-router-dom";
import SubscribeBox from "./components/subscribeBox/SubscribeBox";
import Error from "./Error";
import styled from "styled-components";
import {Helmet} from "react-helmet";

//TODO copy to clipboard will make a notification window
//TODO add lazy loading for articles, article content should be gray lines
//TODO copy link icon instead of the big button ...
//TODO add estimated reading time to the top of an article
//TODO add like button feature
//TODO add comment feature
//TODO buttoms to be continued
//TODO check errors in F12 on this page
//TODO reseolve date problems from the api ...


const ArticleTitle = styled.div`
color ${({theme}) => theme.articleTitleTextColor};
`;

const ArticleContent = styled.p`
color : ${({theme}) => theme.articleContentTextColor};
`;

const DatePosted = styled.div`
color : ${({theme}) => theme.articleContentTextColor};
`;


export default class Article extends React.Component {

    constructor(props) {
        super(props);

        this.articleLocalFileName = this.props.match.params.articleLocalFileName;

        this.articleSourceLink = '/articles/' + this.articleLocalFileName;

        this.state = {
            articleContent: "",
            articleAPIResponse: [],
            errorOccurred: false
        }
    }


    callArticleAPI() {

        const articleLocalFileName = this.articleLocalFileName;

        fetch("http://localhost:9000/article", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                articleLocalFileName: articleLocalFileName
            })
        })
            .then(response => response.json())

            //if there is no data from the api it will set the errorOccurred to true in order to show to 404Error page after the condition rendering
            .then((response) => {
                if (response.length === 0) {
                    this.setState({errorOccurred: true});
                }
                return response;
            })
            .then(response => this.setState({articleAPIResponse: response}))
            .catch(function (error) {
                console.log(error);
            })
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
    }

    render() {

        const articleObject = this.state.articleAPIResponse;

        console.log(articleObject);
        const articleContent = {__html: this.state.articleContent};
        return (
            <div>
                {articleObject.map((article, id) =>
                    <div key={article.idPost}>

                        <Helmet>
                            <title>{article.title}</title>
                            <meta name={"description"} content={article.metaDescription}/>
                            <meta name={"keywords"} content={article.metaKeywords}/>
                        </Helmet>
                        <div className={"articleTopContainer"}>
                            <ArticleTitle className="articleTitle">
                                {article.title}
                            </ArticleTitle>

                            <DatePosted className="datePosted">
                                {/*{article.datePosted.slice(0,10).replace("-","/")}*/}
                                {this.articlePostDateReformatting(article.datePosted)}
                            </DatePosted>

                        </div>

                        <div className="articleHashtagContainer">
                            <Hashtag hashtags={article.hashtags}/>
                        </div>

                        <ArticleContent className="articleContent" dangerouslySetInnerHTML={articleContent}/>


                        <div className="articleSubTitleContainer">

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
                )}

                {this.state.errorOccurred === true &&
                <Error/>
                }

            </div>
        );
    }
}