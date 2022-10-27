import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ListeLogements from "../assets/api/logement.json";
import Carrousel from './Carrousel';
import Dropdown from './Dropdown';
import Tag from './Tag';

function LogementFiche() {
    // Récuperer une fiche logement spécifique
    const params = useParams();
    //console.log(params.id)
    const logementData = ListeLogements.find(logement => logement.id === params.id);
    //console.log(logementData.id)
    

    // Tags
    const logementTags = logementData.tags.map((tags, index) => {
        return <Tag key={index} tagData={tags} />
    });

    //Notation
    let logementNotation = [];
    let fullStar = true;
    for (let index = 0; index < 5; index++) {
        if (index === parseInt(logementData.rating)) {
            fullStar = false;
        }
        if (fullStar === true) {
            logementNotation.push(<img key={index} className="star" src="../assets/logo/star_red.png" alt="note du logement" />)
        } else {
            logementNotation.push(<img key={index} className="star" src="../assets/logo/star_gray.png" alt="note du logement" />)
        }
    };

    // Equipements
    const logementEquipement = logementData.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    });

    return (
        <>
            {
                logementData ? (
                    <div className="data">
                        <Carrousel images={logementData.pictures} />
                        <div className="proprietaire-logement">
                            <div className="information-logement">
                                <span className="titre-logement">{logementData.title}</span>
                                <span className="lieu-logement">{logementData.location}</span>
                                <div className="tags">{logementTags}</div>
                            </div>
                            <div className="proprietaire-note">
                                <div className="proprietaire-informations">
                                    <span className="nom-proprietaire">{logementData.host.name}</span>
                                    <img className="photo-propietaire" src={logementData.host.picture} alt="Proprietaire" />
                                </div>
                                <div className="note">{logementNotation}</div>
                            </div>
                        </div>
                        <div className="description-equipements">
                            <Dropdown title="Description" description={logementData.description} />
                            <Dropdown title="Equipements" description={logementEquipement} />
                        </div>
                    </div>
                ) : <Navigate replace to="/NoPage" />
            }
        </>
    )

}

export default LogementFiche;