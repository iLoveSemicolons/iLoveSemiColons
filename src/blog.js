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
                    <title>Blog</title>
                    <meta name={"keywords"}
                          content={"open source, blog open source, posts, articles, open source article, technology, open source creator, programmer, software developer, Lyon, France"}/>
                    <meta name={"description"} content={"Read about Open Source projects and learn new topics"}/>
                </Helmet>
                <PageTitle title="BLog"/>

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

