import React from 'react';

const Card = ({ name, type, num, descr}) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <h4>{num}</h4>
        <p>{descr}</p>
      </div>
    </div>
  );
}

export default Card;