import React from "react";
import './Contact.css';

function Contact() {
    return (
      <div className="contact-container">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id = "name" name = "name" required />


            <label htmlFor="email">Email:</label>
            <input type="email" id = "email" name = "email" required />

            <label htmlFor="name">Message:</label>
            <textarea id="message" name="message" rows = "4" required />

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact information</h2>
          <p>
            <strong>Email</strong> info@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (123) 456- 7890
          </p>
          <p>
            <strong>Address:</strong> 123 Main Street, CityVille, Country
          </p>
        </div>
      </div>
    );
  }
  
  export default Contact;
  