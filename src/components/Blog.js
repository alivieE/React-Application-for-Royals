import React from "react";
import './Blog.css';

function Blog() {
    return (
      <div className="blog-container">
        <h2>Latest Blog Posts</h2>

        <div className="blog-post">
          <img src="pexels-albin-berlin-919073.jpg" alt="Blog Post 1"/>
          <div className="blog-content">
            <h3>Introducing the ROYALS Racer!</h3>
            <p>
              Unveiling our latest masterpiece – the ROYALS Racer! 
              This high-performance marvel is engineered for speed enthusiasts 
              who crave the perfect blend of power and precision on the road.
              Get ready to redefine the standards of automotive excellence.
            </p>
          </div>
        </div>
        
        <div className="blog-post">
          <img src="pexels-jacob-moore-11913285.jpg" alt="Blog Post 1"/>
          <div className="blog-content">
            <h3>Crafting the ROYALS Racing Experience</h3>
            <p>Explore the meticulous craftsmanship behind ROYALS Racing. 
              From initial concept sketches to precision engineering, 
              discover the passion, dedication, and innovation that drive us to push
              the boundaries of what's possible in the world of racing. 
              Welcome to a world where speed meets precision.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Blog;
  