import React from "react"
import "./hashtag.scss"

//TODO clicking on one hashtag will show all related articles

export default class Hashtag extends React.Component {
    constructor(props) {
        super(props);
        this.hashtagArray = props.hashtagArray;
    }

    mappingHashtagArray(hashtagArray) {
        return hashtagArray.map((hashtag) => <div className="hashtagText"># {hashtag}</div>);
    }

    render() {
        // return this.hashtagArray.map((hashtag) => <div className="hashtagText"># {hashtag}</div>);
            return this.mappingHashtagArray(this.hashtagArray);
    }
}