import React from "react";
import "../../App.css";

const PetCard = ({pet, borderColor}) => {
    return (
        <div className="pet-card">
        <img src={pet.photo} alt={pet.name} className="pet-image"/>
        <h2>{pet.name}</h2>
      </div>
    );
  };

  export default PetCard;