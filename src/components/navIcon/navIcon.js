import React from "react"
import "./navIcon.scss"
import "../navBar/navBar.scss";
import {NavLink} from "react-router-dom";


//TODO FADEIN and FADEOUT navBar material ui
//TODO while NavBar is open, clicking  on any part of the page will close it

export default class NavIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }
        this.toggleHidden = this.toggleHidden.bind(this);
        this.navMenuAnimationToggle = this.navMenuAnimationToggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.clickOutside = this.clickOutside.bind(this);
        this.clickOnLink = this.clickOnLink.bind(this);
    }



    toggleHidden() {
        this.setState(state => ({isHidden: !state.isHidden}));
    }

    navMenuAnimationToggle() {
        const icons = document.querySelectorAll('.icon');
        icons.forEach(icon => {
            icon.classList.toggle("open");
        });
    }

    handleClick() {
        this.navMenuAnimationToggle();
        this.toggleHidden();
        document.addEventListener("click", this.clickOutside)

        const navBarLink = document.querySelectorAll(".navBarLink");
        console.log(navBarLink);
        for (let i = 0; i <navBarLink.length; i++) {
            navBarLink[i].addEventListener("click", this.clickOnLink);
        }
    }

    clickOutside(){
        // this.navMenuAnimationToggle();
        // this.toggleHidden();
        // document.removeEventListener("click", this.clickOutside)
    }

    clickOnLink(){
        this.navMenuAnimationToggle();
        this.toggleHidden();
        window.alert("click on link");
        const navBarLink = document.getElementsByClassName("navBarLink");
        for (let i = 0; i <navBarLink.length; i++) {
            navBarLink[i].removeEventListener("click", this.clickOnLink);
        }
    }


    render() {
        return (
            <div>
                <div onTouchStart={this.handleClick} onClick={this.handleClick} className="icon nav-icon-5">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {!this.state.isHidden && <NavBar/>}
            </div>
        );
    }
}


function NavBar() {
    return (<div className="navBarContainer navBar">
        <NavLink className={"navBarLink"} to={"./"}>Home</NavLink>
        <NavLink className={"navBarLink"} to={"./../../../project"}>Projects</NavLink>
        <NavLink className={"navBarLink"} to={"./../../../blog"}>Blog</NavLink>
        <NavLink className={"navBarLink"} to={"./../../../about"}>About</NavLink>
        <NavLink className={"navBarLink"} to={"./../../../contact"}>Contact</NavLink>
    </div>);
}
