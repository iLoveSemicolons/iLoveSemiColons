import React from 'react'
import "./article.scss"
import Hashtag from "./components/hashtag/hashtag";
import {NavLink} from "react-router-dom";
import SubscribeBox from "./components/subscribeBox/SubscribeBox";
import Error from "./Error";

//TODO copy to clipboard will make a notification window
//TODO add lazy loading for articles, article content should be gray lines

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
        const articleContent = {__html: this.state.articleContent};
        return (
            <div>
                {articleObject.map((article) =>
                    <div>
                        <div className="articleTitle">
                            {article.title}
                        </div>

                        <div className="articleSubTitleContainer">
                            <div className="datePosted">
                                {article.datePosted}
                            </div>


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

                        <div className="articleHashtagContainer">
                            <Hashtag hashtags={article.hashtags}/>
                        </div>

                        <p className="articleContent" dangerouslySetInnerHTML={articleContent}/>

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