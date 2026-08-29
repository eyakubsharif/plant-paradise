import React, { useContext, useState } from "react";
import { PlantContext } from "../../Context/PlantContext";
import { getDataFromLocalStorage, removeFromLocalStorage } from "../../utilitis";
import { useLoaderData } from "react-router";
import MyPlantCard from "../../components/Card/MyPlantCard";

function MyPlants() {
  const [storageIds, setStorageIds] = useState(() => getDataFromLocalStorage() || []);
  const { myPlant } = useContext(PlantContext);
  const allPlant = useLoaderData();
  const storageId = getDataFromLocalStorage() || [];

  const allPlants = allPlant?.plant || allPlant || [];

  const filters = allPlants.filter((plant) => storageId.includes(plant.id));

  if (!filters || filters.length === 0) {
    return (
      <div>
        <p>No plant available </p>
      </div>
    );
  }
  const handleDelete = (id) => {
    removeFromLocalStorage(id);
    
    // ২. State আপডেট করা (এর ফলে UI থেকে কার্ডটি সাথে সাথে গায়েব হয়ে যাবে)
    setStorageIds((prevIds) => prevIds.filter((storedId) => storedId !== id));
  };

  return (
    <div className="w-11/12 mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-5">
        My Plant Collection ({filters.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filters.map((plant) => (
          <MyPlantCard plant={plant} handleDelete={handleDelete}></MyPlantCard>
        ))}
      </div>
    </div>
  );
}

export default MyPlants;
