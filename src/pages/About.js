import React from "react";
import '../styling/About.css';

function About() {
    return (
      <div className="about-container">
        <h1>GUILLAME COLOMBEL</h1>
        <p>
          Hey, I’m Guillaume, a freelance interactive developer based in Montreal. 
          Autodidact developer, I studied design at school for 5 years in parallel 
          to doing freelance work as a developer. As a self-taught developer, I 
          studied design for five years while simultaneously working as a freelance 
          developer. After three enriching years at makemepulse, where I tackled a 
          variety of challenging interactive projects, I’m now embarking on a new 
          adventure in Montreal.
        </p>
        <p>
          Very sensitive to every detail and motion thanks to my background as a 
          designer, I like to spend time fine-tuning each project. I also prefer 
          working on meaningful projects that evoke genuine emotions rather than 
          just adding animations for visual appeal. Part of the jury on Awwwards 
          since 2019 and proud to be an Okay Dev.
        </p>
        <div className="contact-info">
          <p>EMAIL - -</p>
          <p>TWITTER</p>
          <p>INSTAGRAM</p>
        </div>
      </div>
    );
  }
  
  export default About;