import React from 'react';
import ListeLogements from "../assets/api/logement.json";
import Card from './Card';

const Logements = () => {
    return (    
       <div className='liste-logements'>
        <ul>
        {
            ListeLogements.map((logement) => (
                <Card key={logement.id} logement={logement} />
            ))
        }
        </ul>
        </div>
    );
};

export default Logements;