import React from 'react';
import './Team.css';

function Team() {
    return (
      <div className="team-container">
          <h2>OUR SPECIALISTS</h2>
          <div className="team-category">
            <h3>Design Studio</h3>
            <div className="team-members">
              <div className="team-member">
                <img src="employee.png" alt=""/>
                <p>Name 1</p>
              </div>
              <div className="team-member">
                <img src="employee.png" alt=""/>
                <p>Name 2</p>
              </div>
              <div className="team-member">
                <img src="employee.png" alt=""/>
                <p>Name 3</p>
              </div>
            </div>
          </div>

          <div className="team-category">
            <h3>Retail and Sales</h3>
            <div className="team-members">
              <div className="team-member">
                <img src="employee.png" alt=""/>
                <p>Name 4</p>
              </div>
              <div className="team-member">
                <img src="employee.png" alt=""/>
                <p>Name 5</p>
              </div>
              <div className="team-member">
                <img src="employee.png" alt=""/>
                <p>Name 6</p>
              </div>
              </div>
          </div>

          <div className="team-category">
            <h3>Customization Workshop</h3>
            <div className="team-members">
              <div className="team-member">
                <img src="employee.png" alt=""/>
                <p>Name 7</p>
              </div>
              <div className="team-member">
                <img src="employee.png" alt=""/>
                <p>Name 8</p>
              </div>
              <div className="team-member">
                <img src="employee.png" alt=""/>
                <p>Name 9</p>
              </div>
            </div>
          </div>
          </div>

    );
  }
  
  export default Team;
  