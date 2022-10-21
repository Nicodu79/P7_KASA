import React from 'react';

const Banner = ({image, texte}) => {
    return (
        <div className='banner'>
            <img className='banner-img' src={image} alt='Banniere' />
            <span className='banner-text'>{texte}</span>
        </div>      
    );
};

export default Banner;