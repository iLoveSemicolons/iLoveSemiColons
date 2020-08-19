import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import PageTitle from "./components/pageTitle/pageTitle";
import ArticleCell from "./components/articleCell/ArticleCell";
import Article from "./components/article/article";

//TODO articles should be stored as statical pages but the link to them should be stored in database

//TODO generate a new link with the article title

export default function Blog() {

    return (
        <PageLayout>
            <MainLayout>


                <PageTitle title="BLog"/>


                <Article articleTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt ut labore et d"
                         contentSourcePath='/articles/js-talks.html'
                         datePosted={"05/03/2020"}
                         hashtags= {'javascript'}
                />


                <ArticleCell articleTitle={'post.title'}
                             goToArticleLink = {'post.sourceLink'}
                             hashtags = {'post,hashtags'}
                />



            </MainLayout>
        </PageLayout>
    );
}