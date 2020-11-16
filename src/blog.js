import React from "react"
import PageTitle from "./components/pageTitle/pageTitle";
import ArticleCell from "./components/articleCell/ArticleCell";
import NewIdeaBox from "./components/newIdeaBox/newIdeaBox";
import {Helmet} from "react-helmet";
import toBeUsedAddress from "./components/globalIP";


export default class Blog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            blogAPIResponse: []
        }
    }


    callBlogAPI() {
        fetch(toBeUsedAddress.address + ":9000/blog")
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
            <div>
                <Helmet>

                    {/*Search Engines*/}
                    <title>Blog posts and tutorials about web development</title>
                    <meta name={"description"}
                          content={"Read and learn about new topics and trending technologies in web development to remain ahead of the wave."}/>
                    <meta name={"keywords"}
                          content={"blog open source, trends, web, posts, articles, open source article, technology, open source creator, programmer, software developer, Lyon, France"}/>
                    <meta name="robots" content="index,follow"/>
                    {/*=======================================================================*/}


                    {/*Social media cards*/}
                    <meta property="og:title" content="Blog posts and tutorials about web development"/>
                    <meta property="og:description"
                          content="Read and learn about new topics and trending technologies in web development to remain ahead of the wave."/>
                    {/*=======================================================================*/}


                    {/*TWITTER CARD*/}
                    <meta property="twitter:url" content="https://ilovesemicolons.io/blog"/>
                    <meta property="twitter:title"
                          content="Blog posts and tutorials about web development"/>
                    <meta property="twitter:description"
                          content="Read and learn about new topics and trending technologies in web development to remain ahead of the wave."/>
                    {/*=======================================================================*/}

                </Helmet>
                <PageTitle title="Blog"/>

                <NewIdeaBox ideaBoxTitle="You have an idea for an article or can't wait to learn about a topic ?"/>

                {articles.map((article) =>
                    <ArticleCell
                        idPost={article.idPost}
                        key={article.idPost}
                        title={article.title}
                        sourceLink={article.sourceLink}
                        hashtags={article.hashtags}
                        datePosted={article.datePosted}
                    />
                )}
            </div>
        );
    }
}

