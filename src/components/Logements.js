import React from 'react';
import ListeLogements from "../assets/api/logement.json";
import Card from './Card';

const Logements = () => {
    return (    
       <div className='liste-logements'>
        {
            ListeLogements.map((logement) => (
                <Card key={logement.id} logement={logement} />
            ))
        }
        </div>
    );
};

export default Logements;