import React from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import { ReadBlog } from "./components/Blog/ReadBlog";
import Partners from "./components/Partners/Partners";
const App = () => {
  return (
    // <div>
    //   <Home />
    // </div>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/blog/:postId" exact>
        <ReadBlog />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/ourpartners">
        <Partners />
      </Route>
    </Switch>
  );
};

export default App;
