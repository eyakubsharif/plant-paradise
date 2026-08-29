import React, { useState } from "react";
import { PlantContext } from "./PlantContext";
import { addItemToLocalStorage } from "../utilitis";

const PlantProvider = ({ children }) => {
  const [myPlant, setMyPlant] = useState([]);

  const handleMyPlant = (plant) => {
    const isExist = myPlant.find((item) => item.id === plant.id);
    if (!isExist) {
      setMyPlant((prev) => [...prev, plant]);
      addItemToLocalStorage(plant.id);
    } else {
      alert("This plant is already added!");
    }
  };
  const plantInfo = {
    myPlant,
    setMyPlant,
    handleMyPlant,
  };
  return (
    <PlantContext.Provider value={plantInfo}>{children}</PlantContext.Provider>
  );
};

export default PlantProvider;
