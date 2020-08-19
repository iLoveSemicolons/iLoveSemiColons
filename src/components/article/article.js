import React from 'react'
import "./article.scss"
import Hashtag from "../hashtag/hashtag";
import {NavLink} from "react-router-dom";
import SubscribeBox from "../subscribeBox/SubscribeBox";


// const ReactMarkdown = require('react-markdown/with-html');
//TODO copy to clipboard will make a notification window
//TODO add lazy loading for articles
export default class Article extends React.Component {


    constructor(props) {
        super(props);
        this.articleTitle = props.articleTitle;
        this.datePosted = props.datePosted;
        this.contentSourcePath = props.contentSourcePath;
        this.hashtags = props.hashtags;


        this.state = {
            articleContent: ""
        }
    }


    componentDidMount() {
        const contentSourcePath = this.contentSourcePath
        fetch(contentSourcePath)
            .then(response => response.text())
            .then(response => this.setState({articleContent: response}))
            .catch(function () {
                console.log("error did not fetch");
            });
    }


    copyAndShare() {
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
            <div>

                <div className="articleTitle">
                    {this.articleTitle}
                </div>

                <div className="articleSubTitleContainer">
                    <div className="datePosted">
                        {this.datePosted}
                    </div>


                    <div className="copyAndShareButtonContainer">
                        <button onClick={this.copyAndShare} className="copyAndShareButton">Copier le lien et partager
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


        );


    }

}

