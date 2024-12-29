// src/components/MyComponent.js
import React from 'react';
import Link from '@docusaurus/Link';
import Style from './Button.module.css'; // Import the CSS file


const Button = ({ textContent, to, size = "regular", style="default" }) => {
  return (
    <Link className={`${Style.button} ${Style[size]} ${Style[style]}`}
      to={to}
    >
        {textContent}
    </Link>
  );
};

export default Button;
