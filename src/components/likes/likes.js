import React from "react";
import "./likes.scss"
import styled from "styled-components";
import toBeUsedAddress from "../globalIP";

const LikesNumber = styled.div`
    color : ${({theme}) => theme.NormalTextTextColor};
    `;
const PlusOne = styled.span`
    color : ${({theme}) => theme.NormalTextTextColor};
    `;


export default class Likes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            likes: props.likes,
            idPost: props.idPost,
            likesNumber: [],
        };

        this.handleLikeCLick = this.handleLikeCLick.bind(this);
        this.plusOneLike = this.plusOneLike.bind(this);
        this.getLikesNumber = this.getLikesNumber.bind(this);
        this.updateLikesNumber = this.updateLikesNumber.bind(this);
    }


    //getLikeNumber here calling the api
    componentDidMount() {
        this.getLikesNumber();
    }


    //posting plus one like to the database and then await...
    handleLikeCLick() {
        const liking = async () => {
            this.plusOneLike();

            let that = this;
            setTimeout(function () {
                that.getLikesNumber();

            }, (100));

        }

        liking()
            .catch(function (error) {
                console.log(error);
            })

        //I KNOW THIS IS NOT A SOLUTION BUT ....
        this.restrictDoubleLike();
    }

    plusOneLike() {
        fetch(toBeUsedAddress.address+":9000/plusLike", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idPost: this.state.idPost
            })
        })
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    //get the new likes number after updating to the database
    getLikesNumber() {
        fetch(toBeUsedAddress.address+":9000/getLikesNumber/" + this.state.idPost)
            .then(response => response.json())
            .then(response => this.setState({likesNumber: response}))
            .catch(function (error) {
                console.log(error);
            })
    }

    //I KNOW THIS IS NOT A SOLUTION BUT ....
    restrictDoubleLike() {
        this.handleLikeCLick = null;
    }

    //update the actual likes number in the component by fetching the api
    updateLikesNumber() {

    }


    render() {

        const likesNumber = this.state.likesNumber;
        return (
            <div className={"likesWrapper"}>
                <div className={"likesSubWrapper"}>
                    {likesNumber.map((likesNumber, id) =>
                        <div key={id} onClick={this.handleLikeCLick} className={"likeButton"}>
                            <img src={process.env.PUBLIC_URL + "/like.png"} alt={"likeIcon"} className={"likeIcon"}/>
                            <LikesNumber className={"likesNumber"}>{likesNumber.likes}</LikesNumber>
                            <PlusOne className={"plusOneLike"}>+ 1</PlusOne>
                        </div>
                    )}
                </div>
            </div>
        );
    }

}