// src/components/ArticleList.js

import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return null; // Return null if there are no posts
  }

  return (
    <main className="article-list">
      {posts.map((post) => (
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
      ))}
    </main>
  );
};

export default ArticleList;
