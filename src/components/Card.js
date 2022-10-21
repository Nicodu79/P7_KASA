import React from 'react';

const Card = ({logement}) => {
    return (
      <div className='card'>
        <img src={logement.cover} alt="visuel logement" />
      </div>
    );
};

export default Card;