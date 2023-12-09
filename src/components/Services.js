import React from "react";
import './Services.css';

function Services() {
    return (
      <div className="services-container">
        <h2>Latest Blog Posts</h2>

        <div className="service">
          <img src="pexels-albin-berlin-919073.jpg" alt="servis 1"/>
          <div className="service-details">
            <h3>RoyalRide Custom Design</h3>
            <p>
            Elevate your drive with our "RoyalRide Custom Design" service. Our designers craft bespoke car designs tailored to your preferences, ensuring your vehicle is a unique blend of innovation and elegance.
            </p>
          </div>
        </div>

        <div className="service">
          <img src="istockphoto-988321834-612x612.jpg" alt="servis 2"/>
          <div className="service-details">
            <h3>Royals Auto Boutique</h3>
            <p>
            Indulge in automotive luxury with "Royals Auto Boutique." Discover a curated selection of premium and customized vehicles, each embodying sophistication and performance. Drive in style with our meticulously selected fleet.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  