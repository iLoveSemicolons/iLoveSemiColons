import React from "react";
import MySpaceMainLayout from "../components/mySpaceMainLayout/mySpaceMainLayout";


export default class MyHomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MySpaceMainLayout>
                <div>
                    This is MySpace homepage
                </div>
            </MySpaceMainLayout>
        );
    }

}