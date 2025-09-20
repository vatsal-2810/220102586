import React from 'react';
import { Log } from './log';

const TOKEN = 'YOUR_AUTHORIZATION_TOKEN_HERE';

const ExampleComponent = () => {
  const handleClick = async () => {
    try {
      await Log('frontend', 'info', 'component', 'Button clicked', TOKEN);
      alert('Logged successfully!');
    } catch (err) {
      console.error('Error logging:', err);
    }
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default ExampleComponent;
