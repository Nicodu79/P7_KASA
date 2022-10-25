import React from 'react';

const Card = ({id, image, titre}) => {
    return (
      <div className='card' id={id}>
        <img src={image} className='card-img' alt="visuel logement" />
        <span className='card-title'>{titre}</span>
      </div>
    );
};

export default Card;