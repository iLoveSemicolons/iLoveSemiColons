import React from 'react'
import "./article.scss"
import Hashtag from "./components/hashtag/hashtag";
import {NavLink} from "react-router-dom";
import SubscribeBox from "./components/subscribeBox/SubscribeBox";
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";

// const ReactMarkdown = require('react-markdown/with-html');
//TODO copy to clipboard will make a notification window
//TODO add lazy loading for articles


export default class Article extends React.Component {

    constructor(props) {
        super(props);
        this.articleTitle = this.props.location.state.title;
        this.datePosted = this.props.location.state.datePosted;
        this.sourceLink = '/articles/' + this.props.match.params.articleTitle;
        this.hashtags = this.props.location.state.hashtags;


        this.state = {
            articleContent: ""
        }
    }


    componentDidMount() {


        console.log(this.props.location.state.title);
        console.log(this.hashtags);

        const contentSourcePath = this.sourceLink
        fetch(contentSourcePath)
            .then(response => response.text())
            .then(response => this.setState({articleContent: response}))
            .catch(function () {
                console.log("error did not fetch");
            });
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
        const articleContent = {__html: this.state.articleContent};

        return (
            <PageLayout>
                <MainLayout>

                    <div>
                        <div className="articleTitle">
                            {this.articleTitle}
                        </div>

                        <div className="articleSubTitleContainer">
                            <div className="datePosted">
                                {this.datePosted}
                            </div>


                            <div className="copyAndShareButtonContainer">
                                <button onClick={this.copyToClipboard} className="copyAndShareButton">Copier le lien et
                                    partager
                                </button>
                            </div>


                            <div className="goToBlogPageButtonContainer">
                                <NavLink to={"./blog"}>
                                    <button className="goToBlogPageButton">Voir tous mes articles</button>
                                </NavLink>
                            </div>
                        </div>


                        <div className="articleHashtagContainer">
                            <Hashtag hashtags={this.hashtags}/>
                        </div>


                        <p className="articleContent" dangerouslySetInnerHTML={articleContent}/>


                        <div>
                            <SubscribeBox/>
                        </div>


                    </div>
                </MainLayout>
            </PageLayout>
        );


    }

}

