import React, { useEffect, useState } from "react";
import toBeUsedAddress from "../../config/globalIP";
import ArticleCell from "../articleCell/ArticleCell";
import styles from "./postsTopic.module.scss"

export default function PostsTopic() {


    const [articles, setArticles] = useState([]);

    useEffect(() => {
        callBlogApi();
    }, [])

    const callBlogApi = () => {
        fetch(toBeUsedAddress.address + "/blog")
            .then((response) => response.json())
            .then((response) => setArticles(response))
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={styles.container}>
            {articles.map((article) => (
                <ArticleCell
                    idPost={article.idPost}
                    key={article.idPost}
                    title={article.title}
                    sourceLink={article.sourceLink}
                    hashtags={article.hashtags}
                    datePosted={article.datePosted}
                />
            ))}
        </div>

    )
}