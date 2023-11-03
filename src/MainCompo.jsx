// MainComponent.js
import React from 'react';
import Quee from './Quee';
import Card from './Card';

const MainComponent = () => {
  return (
    <div>
      {Quee.quotes.map((quoteObj, index) => (
        <Card
          key={index}
          quote={quoteObj.quote}
          author={quoteObj.author}
        />
      ))}
    </div>
  );
};

export default MainComponent;