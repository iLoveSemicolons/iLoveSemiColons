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
    }

    render() {
        return (
            <div>
                <div onClick={this.handleClick} className="icon nav-icon-5">
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
        <NavLink to={"./"}>Acceuil</NavLink>
        <NavLink to={"./project"}>Projets</NavLink>
        <NavLink to={"./design"}>Design</NavLink>
        <NavLink to={"./blog"}>Blog</NavLink>
        <NavLink to={"./about"}>A Propos</NavLink>
        <NavLink to={"./contact"}>Contact</NavLink>
    </div>);
}
