import React from 'react'
import "./articleLinkButton.scss"


export default function ArticleLinkButton() {
    return (
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <button className="articleLinkButton">Lire</button>
        </a>
    );
}