import React from "react";
import { FaStar } from "react-icons/fa";

const MyPlantCard = ({ plant,handleDelete }) => {
  const handleRemove = (id) => {
  handleDelete(id)
  };
  return (
    <div>
      <div
        key={plant.id}
        className="border border-gray-300 p-5 rounded-lg shadow-xl"
      >
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-48  rounded-md mb-3"
        />
        <h3 className="font-bold text-lg flex justify-between">
          {plant.name}{" "}
          <small className="flex items-center gap-2">
            <FaStar color="#ffd700"></FaStar>
            {plant.rating}
          </small>
        </h3>
        <p className="text-green-600 font-semibold">${plant.price}</p>
        <button
          onClick={() => handleRemove(plant.id)}
          className="bg-green-700 text-white px-5 py-2 rounded shadow-2xl font-bold text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default MyPlantCard;
