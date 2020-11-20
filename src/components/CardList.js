import React from 'react';
import Card from './Card';

const CardList = ({ incidents }) => {
  return (
    <div>
      {
        incidents.map((user, i) => {
          return (
            <Card
              key={i}
              name={incidents[i].name}
              type={incidents[i].type}
              num={incidents[i].num}
              descr={incidents[i].descr}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;