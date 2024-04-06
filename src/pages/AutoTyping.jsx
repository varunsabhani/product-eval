import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import './AutoTyping.css';

function AutoTyping() {
  return (
    <div className="AutoTyping">
      <Typewriter
        options={{
          strings: ['Revolutionizing Product Credibility and Nutritional Awareness'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default AutoTyping;
