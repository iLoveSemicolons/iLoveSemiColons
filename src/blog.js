import React from "react"
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";
import PageTitle from "./components/pageTitle/pageTitle";
import ArticleCell from "./components/articleCell/ArticleCell";
import Article from "./article";
import NewIdeaBox from "./components/newIdeaBox/newIdeaBox";

//TODO slice the date and show only the important digits


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
            <div>
                <PageTitle title="BLog"/>

                <NewIdeaBox ideaBoxTitle="You have an idea for an article or can't wait to learn about a topic ?"/>

                {articles.map((article) =>
                    <div>
                        <ArticleCell key={article.idPost}
                                     title={article.title}
                                     sourceLink={article.sourceLink}
                                     hashtags={article.hashtags}
                                     datePosted={article.datePosted}
                        />
                    </div>
                )}
            </div>
        );
    }
}

