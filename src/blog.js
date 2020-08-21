import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import PageTitle from "./components/pageTitle/pageTitle";
import ArticleCell from "./components/articleCell/ArticleCell";
import Article from "./article";

//TODO articles should be stored as statical pages but the link to them should be stored in database

//TODO generate a new link with the article title


export default class Blog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            blogAPIResponse: []
        }
    }


    callBlogAPI() {
        fetch("http://localhost:9000/blog")
            .then(response => response.json())
            .then(response => this.setState({blogAPIResponse: response}))
            .catch(function () {
                console.log('Errror fetching blog API');
            });
    }


    componentDidMount() {
        this.callBlogAPI();
    }


    render() {


        const articles = this.state.blogAPIResponse;

        return (
            <PageLayout>
                <MainLayout>

                    <PageTitle title="BLog"/>



{/*                   <Article articleTitle="this is the title"
                             datePosted="01/02/2002"
                             contentSourcePath='/articles/js-talks.html'
                             hashtags="hashtag1,hashtag2"
                    />*/}


                    {articles.map((article) =>
                        <div>
                            <ArticleCell key={article.idPost}
                                         articleTitle={article.title}
                                         goToArticleLink={article.sourceLink}
                                         hashtags={article.hashtags}
                            />
                        </div>
                    )}

                </MainLayout>
            </PageLayout>
        );
    }
}

