import React from 'react'
import "./article.scss"


export default class Article extends React.Component {


    constructor(props) {
        super(props);
        this.articleTitle = props.articleTitle;
        this.datePosted = props.datePosted;
        this.content = props.content;
    }


    copyAndShare() {

    }


    render() {

        return (
            <div>

                <div className="articleTitle">
                    {this.articleTitle}
                </div>

                <div>
                    <div className="datePosted">
                        {this.datePosted}
                    </div>


                    <div>
                        <button className="copyAndShareButton">Copier le lien et partager</button>
                    </div>


                    <div>
                        <button className="goToBlogPageButton">Voir tous mes articles</button>
                    </div>
                </div>


                <div className="articleHashtagContainer">

                </div>


                <p className="articleContent">
                    {this.content}
                </p>
            </div>


        );


    }

}

