import React from "react"
import "./navIcon.scss"
import "../navBar/navBar.scss";
import {NavLink} from "react-router-dom";



//TODO what happenns when touch screen...

export default class NavIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
        }
        this.toggleHidden = this.toggleHidden.bind(this);
        this.navMenuAnimationToggle = this.navMenuAnimationToggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
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


    //navIcon animation and the
    handleClick() {
        this.navMenuAnimationToggle();
        this.toggleHidden();
    }


    //click on a page link will close the notification and change the isHidden State;
    clickOnLink() {
        this.navMenuAnimationToggle();
        this.setState(state => ({isHidden: !state.isHidden}));
    }


    render() {

        const NavBar = () => {
            return (<div className="navBarContainer navBar">
                <NavLink onClick={this.clickOnLink} className={"navBarLink"} to={"../../../"}>Home</NavLink>
                <NavLink onClick={this.clickOnLink} className={"navBarLink"} to={"./../../../project"}>Projects</NavLink>
                <NavLink onClick={this.clickOnLink}  className={"navBarLink"} to={"./../../../blog"}>Blog</NavLink>
                <NavLink onClick={this.clickOnLink}  className={"navBarLink"} to={"./../../../about"}>About</NavLink>
                <NavLink onClick={this.clickOnLink}  className={"navBarLink"} to={"./../../../contact"}>Contact</NavLink>
            </div>);
        }

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

/*

function NavBar() {
    return ();
}
*/
