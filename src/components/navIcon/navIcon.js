import React from "react"
import Styles from "./nav.module.scss"


import {NavLink} from "react-router-dom";

//TODO FADEIN and FADEOUT navBar material ui
//TODO NavIcon and NavBar in tow different components and NavBar as class, setting stateOpen  = true when nav bar is open andfalse when nav bar is closed, it will be set buy clicking on NavIcon

export default function NavIcon() {

    return (

        <div>
            <div onClick={navMenuOnClick} className="icon nav-icon-5">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={Styles.navBarContainer + " " + "navBar"}>
                <NavLink to={"../../../"}>Acceuil</NavLink>
                <NavLink to={"./project"}>Projets</NavLink>
                <NavLink to={"./design"}>Design</NavLink>
                <NavLink to={"./blog"}>Blog</NavLink>
                <NavLink to={"./about"}>A Propos</NavLink>
                <NavLink to={"./contact"}>Contact</NavLink>
            </div>
            <style jsx>{`
                
                
                .openNavBar{  
                    display: flex;
                    visibility : visible;
                    opacity: 1;
                }
               
                             .icon{
    }
                
    .nav-icon-5{
      width: 35px;
      height: 30px;
      position: relative;
      cursor: pointer;
      display: inline-block;
    }
    .nav-icon-5 span{
      background-color:#1B7CD1;
      position: absolute;
      border-radius: 2px;
      transition: .3s cubic-bezier(.8, .5, .2, 1.4);
      width:100%;
      height: 4px;
      transition-duration: 300ms
    }
    .nav-icon-5 span:nth-child(1){
      top:0px;
      left: 0px;
    }
    .nav-icon-5 span:nth-child(2){
      top:13px;
      left: 0px;
      opacity:1;
    }
    .nav-icon-5 span:nth-child(3){
      bottom:0px;
      left: 0px;
    }
    .nav-icon-5:not(.open):hover span:nth-child(1){
      transform: rotate(-3deg) scaleY(1.1);
    }
    .nav-icon-5:not(.open):hover span:nth-child(2){
      transform: rotate(3deg) scaleY(1.1);
    }
    .nav-icon-5:not(.open):hover span:nth-child(3){
      transform: rotate(-4deg) scaleY(1.1);
    }
    .nav-icon-5.open span:nth-child(1){
      transform: rotate(45deg);
      top: 13px;
    }
    .nav-icon-5.open span:nth-child(2){
      opacity:0;
    }
    .nav-icon-5.open span:nth-child(3){
      transform: rotate(-45deg);
      top: 13px;
    }
            
          `}</style>

        </div>
    );
}

function navMenuOnClick() {
    navMenuAnimationToggle();
    navBarTriggerButton();

}

function navMenuAnimationToggle() {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.classList.toggle("open");
    });
}


function navBarTriggerButton() {
    const navBar = document.getElementsByClassName("navBar")[0];
    navBar.classList.toggle("openNavBar");
}
