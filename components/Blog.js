import React from 'react';
import './Blog.css'; // Import the CSS file

function Blog() {
  return (
    <div className="blog-container">
      <h2>Latest Blog Posts</h2>

      <div className="blog-post">
        <img src="tech.jpg" alt="Blog Post 1" />
        <div className="blog-content">
          <h3>Exploring the Future of Technology</h3>
          <p>
            Dive into the fascinating world of emerging technologies and discover how they are shaping
            the future. From artificial intelligence to blockchain, we explore it all in this insightful post.
          </p>
        </div>
      </div>

      <div className="blog-post">
        <img src="tech.jpg" alt="Blog Post 2" />
        <div className="blog-content">
          <h3>The Art of Web Design: Balancing Beauty and Functionality</h3>
          <p>
            Uncover the secrets of creating visually stunning websites while maintaining optimal functionality.
            This post delves into the art of web design and offers tips for achieving the perfect balance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
