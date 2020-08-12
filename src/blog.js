import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import PageTitle from "./components/pageTitle/pageTitle";
import ArticleCell from "./components/articleCell/ArticleCell";
import Article from "./components/article/article";


export default function Blog() {

    return (
        <PageLayout>
            <MainLayout>
                {/*                <Article articleTitle="azeazeaze"
                         content="is simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                         date="05/03/2020"
                         hashTagArray={["apzorj","azr","azeaze"]}
                />*/}

                <PageTitle title="BLog"/>


                <ArticleCell
                    articleTitle="Lorem psum dolor sit amet, consectetur adipiscing elit rem ipsum dolor sit amet, consectetur adipiscing rem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod tempor incidi-unt ut labore et d"
                    hashtagArray={["javascript","vue.js"]}/>
            </MainLayout>
        </PageLayout>
    );
}