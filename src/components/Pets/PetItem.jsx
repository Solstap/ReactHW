import React from "react";
import "../../App.css";


const PetItem = ({pet}) => {
    return (
        <>
        <img src={pet.photo} alt={pet.name} />
        <h2>{pet.name}</h2>
        </>
    )
}

export default PetItem