import React, { createContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Project from "./project";
import Error from "./Error";
// import design from "./design";
import about from "./about";
import contact from "./contact";
import blog from "./blog";
import Home from "./home";
import article from "./article";
import PrivateRepoRequest from "./privateRepoRequest";
import "./App.scss";
import Subscribe from "./subscribe";
import ArticleTesting from "./articleTesting";
import LegalNotice from "./legalNotice";

//===========================================================
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { initialThemeState, themeReducer } from "./reducers/themeReducer";
import { Helmet } from "react-helmet";
import ScrollToTop from "./components/scrollToTop";
import TestFormRider from "./testFormRider";
//===========================================================


export const AppContext = createContext();

function App() {
  const [themeState, dispatch] = useReducer(themeReducer, initialThemeState);
  const { currentTheme } = themeState;
  console.log(themeState);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider theme={currentTheme}>
        <AppContext.Provider value={{ ...themeState, dispatch }}>
          <GlobalStyles />
          <Helmet>
            <meta name="robots" content="index,follow" />
          </Helmet>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');            
            @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@900&display=swap');
          </style>
          <Switch>
            <Route On path="/" component={Home} exact />
            <Route exact path="/project" component={Project} />
            {/*<Route path="/design" component={design}/>*/}
            <Route exact path="/blog" component={blog} />
            <Route exact path="/about" component={about} />
            <Route exact path="/contact" component={contact} />
            <Route exact path="/legalNotice" component={LegalNotice} />
            <Route exact path="/subscribe" component={Subscribe} />
            <Route exact path="/testFormRider" component={TestFormRider} />
            <Route exact path="/privateRepoRequest" component={PrivateRepoRequest} />
            <Route exact path="/articleTesting/:articleLocalFileName" component={ArticleTesting} />
            <Route exact path="/article/:articleLocalFileName" component={article} />
            <Route component={Error} />

          </Switch>
        </AppContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
