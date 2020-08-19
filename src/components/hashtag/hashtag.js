import React from "react"
import "./hashtag.scss"

//TODO clicking on one hashtag will show all related articles

export default class Hashtag extends React.Component {
    constructor(props) {
        super(props);
        this.hashtags = props.hashtags;
    }

    mappingHashtagArray(hashtags) {
        const hashtagArray = this.hashtagsToArrayOfHashtags(hashtags);
        return hashtagArray.map((hashtag) => <div className="hashtagText"># {hashtag}</div>);
    }


    hashtagsToArrayOfHashtags(hashtags){
        return hashtags.split(',');
    }

    render() {
        return this.mappingHashtagArray(this.hashtags);
    }
}