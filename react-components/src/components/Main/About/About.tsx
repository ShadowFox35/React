import React from 'react';
import { Link } from 'react-router-dom';

import './About.scss';

const About: React.FC = () => {
  document.title = 'About Us';
  return (
    <div className="container">
      <div className="about-container">
        <h1>About Us</h1>
        <div></div>
        <div>
          <p>Nice to meet you! We are glad to see you on our website!</p>
          <p>Some text</p>
        </div>
      </div>
    </div>
  );
};

export default About;
