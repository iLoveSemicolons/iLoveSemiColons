import React from "react";
import PageTitle from "./components/pageTitle/pageTitle";
import ArticleCell from "./components/articleCell/ArticleCell";
import NewIdeaBox from "./components/newIdeaBox/newIdeaBox";
import { Helmet } from "react-helmet";
import toBeUsedAddress from "../src/config/globalIP";
import PageLayout from "./components/pageLayout/pageLayout";
import MainLayout from "./components/mainLayout/mainLayout";

export default class Blog extends React.Component {
  constructor() {
    super();

    this.state = {
      blogAPIResponse: [],
    };
  }

  callBlogAPI() {
    fetch(toBeUsedAddress.address + "/blog")
      .then((response) => response.json())
      .then((response) => this.setState({ blogAPIResponse: response }))
      .catch(function () {
        console.log("Errror fetching blog API");
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
          <Helmet>
            <title>Blog posts and tutorials about web development</title>
            <meta
              name={"description"}
              content={
                "Read and learn about new topics and trending technologies in web development to remain ahead of the wave."
              }
            />
            <meta
              name={"keywords"}
              content={
                "blog open source, trends, web, posts, articles, open source article, technology, open source creator, programmer, software developer, Lyon, France"
              }
            />
            <meta name="robots" content="index,follow" />
          </Helmet>
          <PageTitle title="Blog" />

          <NewIdeaBox ideaBoxTitle="You have an idea for an article or can't wait to learn about a topic ?" />

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
          <ArticleCell
              idPost={1}
              key={1}
              title={"Over-engineering yourReact app, the orange juice"}
              sourceLink={"over-engineering-your-react-app.html"}
              hashtags={"react,javascript,aefaef,ggg"}
              datePosted={"article.datePosted"}
            />
        </MainLayout>
      </PageLayout>
    );
  }
}
