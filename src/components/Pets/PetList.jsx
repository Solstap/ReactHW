import React from "react";
import PetCard from "./PetCard";
import "../../App.css";
import JerryImage from "../../assets/Jerry.avif";
import FloofyImage from "../../assets/floofy.jpg";
import JamieImage from "../../assets/Jamie.avif";
import ScoobyImage from "../../assets/scooby.jpg";


const pets =[
    {
        name: "Jerry",
        photo: JerryImage,
    },
    {
        name: "Floofy",
        photo: FloofyImage,
    },
    {
        name: "Jamie",
        photo: JamieImage,
    },
    {
        name: "Scooby",
        photo: ScoobyImage,
    },

]

const PetList = () => {
    return (
        <div className="pet-list">
          {pets.map((pet, index) => (
            <PetCard
              key={index}
              pet={pet}
            />
          ))}
        </div>
      );
    };

export default PetList;