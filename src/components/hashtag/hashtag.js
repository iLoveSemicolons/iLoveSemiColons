import React from "react"
import "./hashtag.scss"

//TODO clicking on one hashtag will show all related articles
//TODO in DataBase, hashtags should be separated by a point, it will then be split to several hashtags


export default class Hashtag extends React.Component {
    constructor(props) {
        super(props);
        this.hashtagArray = props.hashtagArray;
        this.splitHashtagArray(this.hashtagArray);
    }

    splitHashtagArray(hashtagArray) {
        hashtagArray.forEach((hashtag) => {
            return (
                <div className="hashtagText"># {hashtag}</div>
            );
        });
    }

    render() {
        return (<div className="hashtagText"># {this.hashtagArray}</div>
        );
    }
}



