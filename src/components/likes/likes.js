import React from "react";
import "./likes.scss"
import styled from "styled-components";



const LikesNumber = styled.div`
    color : ${({theme}) => theme.NormalTextTextColor};
    `;
const PlusOne = styled.span`
    color : ${({theme}) => theme.NormalTextTextColor};
    `;




/*
*  =========== WHAT IS HAPPENING HERE ?? ============================
*  1- the "to be liked post id" idPost is getting passed to this component via props.
*  2- querying the node server,
*  3- node server is will add +1 to the value
*  4- this component likes number is getting updated by getting likes number from the node server
* */

export default class Likes extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            likes: props.likes,
            idPost : props.idPost,
        };

        this.handleLikeCLick = this.handleLikeCLick.bind(this);
        this.plusOneLike = this.plusOneLike.bind(this);
        this.getLikesNumber = this.getLikesNumber.bind(this);
        this.updateLikesNumber = this.updateLikesNumber.bind(this);
    }

    componentDidMount(){

    }

    handleLikeCLick(){
        const liking = async () => {
            await this.getLikesNumber();
            await this.updateLikesNumber();
        }

        liking()
            .catch(function(error){
                console.log(error);
            })
    }

    plusOneLike(){

    }

    getLikesNumber(){

    }


    updateLikesNumber(){

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