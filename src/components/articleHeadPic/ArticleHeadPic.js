
import React from "react";
import { Link } from "react-router-dom";
import styles from "./ArticleHeadPic.module.scss"
export default function ArticleHeadPic({ articleSourceLink }) {
    
    
    

    return (
            <Link to={{pathname: `/article/${articleSourceLink}`}}>
                <img className={styles.picContainer} src={`/articles/${articleSourceLink.substring(0, articleSourceLink.length - 5)}/${articleSourceLink.substring(0, articleSourceLink.length - 5)}.webp`}
                    alt={"Sirage al dbiyat développeru web Lyon auteur de" + articleSourceLink}
                />
            </Link>
    )
}