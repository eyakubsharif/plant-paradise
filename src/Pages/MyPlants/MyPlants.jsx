import React, { useContext } from "react";
import { PlantContext } from "../../Context/PlantContext";
import { getDataFromLocalStorage } from "../../utilitis";
import { useLoaderData } from "react-router";

function MyPlants() {
  const { myPlant } = useContext(PlantContext);
  const allPlant = useLoaderData();
  const storageId = getDataFromLocalStorage() || [];

  const allPlants = allPlant?.plant || allPlant || [];

  const filter = allPlants.filter((plant) => storageId.includes(plant.id));

  if (!filter || filter.length === 0) {
    return (
      <div>
        <p>No plant available </p>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-5">
        My Plant Collection ({filter.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filter.map((plant) => (
          <div key={plant.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="font-bold text-lg">{plant.name}</h3>
            <p className="text-green-600 font-semibold">${plant.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPlants;
