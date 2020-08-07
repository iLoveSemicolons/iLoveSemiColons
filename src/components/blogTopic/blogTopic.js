import React from "react"
import ShowAll from "../showAll/showAll";


export default function BlogTopic() {
    return (
        <div>
            <ShowAll text="Voir tous mes articles" goTo={"./blog"}/>
        </div>
    )

}