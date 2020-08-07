import React from "react"
import ShowAll from "../showAll/showAll";


export default function ProjectTopic() {
    return (
        <div>
            <ShowAll text="Voir tous mes projects" goTo={"./project"}/>
        </div>
    )
}