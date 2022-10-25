import React from 'react';
import { NavLink } from 'react-router-dom';
import ListeLogements from "../assets/api/logement.json";
import Card from './Card';

const Logements = () => {
    return (    
       <div className='liste-logements'>
        {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/Logement/"+logement.id}><Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
        </div>
    );
};

export default Logements;