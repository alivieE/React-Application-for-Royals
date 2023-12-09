import React from 'react';
import './About.css'; // Import the CSS file

function About() {
  return (
    <div className="about-container">
       <header className="about-header">
        <h2>About Us</h2>
        <p>Discover Our Story and Mission</p>
      </header>
      <div className="about-section">
        <img src="pexels-alexander-pöllinger-10414268.jpg" alt="Image 1" className="about-image" />
        <p>
        Welcome to ROYALS Racing Team, a pinnacle of automotive excellence and regal sophistication. Born from a passion for redefining the industry, we specialize in crafting bespoke car designs and curating exclusive retail experiences.
        </p>
      </div>
      <div className="about-section">
        <p>
        In our Design Studio, creativity and precision converge as our skilled designers strive to innovate, creating unique and customized vehicle designs that embody the distinctive style and regal identity of ROYALS Racing. Each curve and detail is meticulously crafted to ensure our vehicles not only perform at the highest levels but also exude unparalleled sophistication.
        </p>
        <img src="pexels-gabriel-hohol-3593922.jpg" alt="Image 2" className="about-image" />
      </div>
      <div className="about-section">
        <img src="pexels-yurii-hlei-1545743.jpg" alt="Image 3" className="about-image" />
        <p>
        Step into Royals Auto Boutique, our showroom featuring a curated selection of premium and customized vehicles. Our Retail and Sales team ensures that your experience with ROYALS Racing Team is exceptional, from the moment you enter our doors to the exhilarating drive in your new ROYALS Racing vehicle.
        </p>
      </div>
      <div className="about-section">
        <p>
        The heartbeat of ROYALS Racing Team echoes in our Customization Workshop, where dreams become reality. Skilled technicians and mechanics transform design concepts into high-performance masterpieces, showcasing our commitment to innovation and craftsmanship. Join us on this journey, where each vehicle is a testament to our passion for pushing boundaries, our dedication to luxury, and our unwavering commitment to the regal spirit of the open road. Welcome to ROYALS Racing Team – where sophistication meets speed.
        </p>
        <img src="pexels-jacob-moore-11913285.jpg" alt="Image 4" className="about-image" />
      </div>
    </div>
  );
}

export default About;
