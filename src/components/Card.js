import React from 'react';

const Card = ({logement}) => {
    return (
      <div className='card' id={logement.id}>
        <img src={logement.cover} className='card-img' alt="visuel logement" />
        <span className='card-title'>{logement.title}</span>
      </div>
    );
};

export default Card;