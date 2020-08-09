import React from "react"
import "./navBar.scss"
import {NavLink} from "react-router-dom";


export default class NavBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }
        this.toggleHidden = this.toggleHidden.bind(this);
    }


    toggleHidden() {
        this.setState(state => ({isHidden: !state.isHidden}));
    }


    render() {
        return (
            <div>
                <button onClick={this.toggleHidden} >
                    Click to show modal
                </button>
                {!this.state.isHidden && <Child />}
            </div>);
    }
}

const Child = () => (
    <div className="navBarContainer navBar">
        <NavLink to={"../../../"}>Acceuil</NavLink>
        <NavLink to={"./project"}>Projets</NavLink>
        <NavLink to={"./design"}>Design</NavLink>
        <NavLink to={"./blog"}>Blog</NavLink>
        <NavLink to={"./about"}>A Propos</NavLink>
        <NavLink to={"./contact"}>Contact</NavLink>
    </div>
)