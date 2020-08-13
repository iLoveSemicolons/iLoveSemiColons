import React from 'react'
import "./article.scss"
import Hashtag from "../hashtag/hashtag";
import {NavLink} from "react-router-dom";
import SubscribeBox from "../subscribeBox/SubscribeBox";


//TODO copy to clipboard will make a notification window

export default class Article extends React.Component {


    constructor(props) {
        super(props);
        this.articleTitle = props.articleTitle;
        this.datePosted = props.datePosted;
        this.content = props.content;
        this.hashtagArray = props.hashtagArray;
    }


    copyAndShare() {
        let dummyLinkHolder= document.createElement("input"), text = window.location.href;
        document.body.appendChild(dummyLinkHolder);
        dummyLinkHolder.value = text;
        dummyLinkHolder.select();
        document.execCommand("copy");
        document.body.removeChild(dummyLinkHolder);
    }


    render() {

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
                        <button onClick={this.copyAndShare} className="copyAndShareButton">Copier le lien et partager</button>
                    </div>


                    <div className="goToBlogPageButtonContainer">
                        <NavLink  to={"./blog"}>
                            <button className="goToBlogPageButton">Voir tous mes articles</button>
                        </NavLink>
                    </div>
                </div>


                <div className="articleHashtagContainer">
                    <Hashtag hashtagArray={this.hashtagArray}/>
                </div>


                <p className="articleContent">
                    {this.content}
                </p>



                <div>
                    <SubscribeBox />
                </div>


            </div>


        );


    }

}

