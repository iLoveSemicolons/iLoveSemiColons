import React from "react";
import ReactDOM, {unmountComponentAtNode} from 'react-dom';
import style from "./notification.module.scss";

export default class Notification extends React.Component {


    constructor(props) {
        super(props);

        this.notificationText = props.notificationText
        this.closeNotification  = this.closeNotification.bind(this);
    }


    closeNotification(){
        unmountComponentAtNode(React.findDOMNode(this).parentNode);
    }



    render() {
        return (
                <div className={style.notification}>
                    {this.notificationText}
                    <span onClick={this.closeNotification} className={style.closeNotification}>Close Notification</span>
                </div>
        )
    }
}