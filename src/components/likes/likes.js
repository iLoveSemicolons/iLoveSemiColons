import React from "react";
import "./likes.scss"
import styled from "styled-components";


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
            oneLike: 1,
        };

        this.handleLikeCLick = this.handleLikeCLick.bind(this);
        this.plusOneLike = this.plusOneLike.bind(this);
        this.getNewLikesNumber = this.getNewLikesNumber.bind(this);
        this.updateLikesNumber = this.updateLikesNumber.bind(this);
    }


    handleLikeCLick() {
        const liking = async () => {
            await this.plusOneLike();
            // this.updateLikesNumber();
        }

        liking()
            .catch(function (error) {
                console.log(error);
            })
    }

    plusOneLike() {
        fetch("http://localhost:9000/like", {
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
    getNewLikesNumber() {

    }

    //update the actual likes number in the component by fetching the api
    updateLikesNumber() {

    }


    render() {
        return (
            <div className={"likesWrapper"}>
                <div className={"likesSubWrapper"}>
                    <div onClick={this.handleLikeCLick} className={"likeButton"}>
                        <img src={process.env.PUBLIC_URL + "/like.png"} alt={"likeIcon"} className={"likeIcon"}/>
                        <LikesNumber className={"likesNumber"}>{this.state.likes}</LikesNumber>
                        <PlusOne className={"plusOneLike"}>+ 1</PlusOne>
                    </div>
                </div>
            </div>
        );
    }

}