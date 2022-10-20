import React from 'react';

const Banner = ({image, texte}) => {
    return (
        <div className='banner'>
            <img className='banner-img' src={image} alt='Banniere' />
            <div className='banner-dark'></div>
            <span className='banner-text'>{texte}</span>
        </div>      
    );
};

export default Banner;