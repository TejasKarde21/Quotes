// Card.js
import React from 'react';

const Card = ({ quote, author }) => {
  return (
    <div className='w-screen flex flex-col justify-between items-center'>
    <div className="card bg-gray-900 m-8 text-white p-10 text-center rounded-xl w-[70%] md:mt-28 mt-36">
      <p className='text-3xl font-bold'>{quote}</p>
      <p className='mt-2 text-gray-400'> {author}</p>
    </div>
    </div>
  );
};

export default Card;
