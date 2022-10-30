import React, { useState } from 'react';

const Carrousel = ({ images }) => {
    let [imgActive, imgChange] = useState(0);
    let imgNumber = images.length;

    const imgPrevious = () => {
        if (imgActive === 0) {
            imgChange(imgNumber - 1);
        } else {
            imgChange(imgActive - 1);
        }
        return (imgChange);
    };

    const imgNext = () => {
        if (imgActive === imgNumber - 1) {
            imgChange(imgNumber = 0);
        } else {
            imgChange(imgActive + 1);
        }
        return (imgChange)
    };

    return (
        <div className="carrousel">
            {
                imgNumber > 1 && <img className="arrow left-arrow" src="../assets/logo/arrow_left.png" alt="contenu précédent" onClick={imgPrevious} />
            }
            {
                images.map((image, index) => {
                    return (
                        <img key={index} className={index === imgActive ? "carrousel-img actif" : "carrousel-img"} src={image} alt="Logement" />
                    )
                })
            }
            {
                imgNumber > 1 && <img className="arrow right-arrow" src="../assets/logo/arrow_right.png" alt="contenu suivant" onClick={imgNext} />
            }
        </div>
    );
};

export default Carrousel;