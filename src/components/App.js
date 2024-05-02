import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <main>
        <About image={blogData.image} about={blogData.about} />
        <ArticleList articles={blogData.articles} />
      </main>
    </div>
  );
}

export default App;
