import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { addItemToLocalStorage } from "../../utilitis";
import { ToastContainer } from "react-toastify";

const PlantDetails = () => {
  const [plants, setPlants] = useState([]);
  const { plant } = useLoaderData();
  const { plantId } = useParams();

  const filter = plant.find((tree) => tree.id === parseInt(plantId));
  const {
    name,
    image,
    description,
    rating,
    price,
    water,
    difficulty,
    origin,
    id,
    category,
    light,
    size,
  } = filter;

  const handleMyPlantBtn = (id) => {
    addItemToLocalStorage(id);
  };
  console.log(plant);
  return (
    <div className="flex w-11/12 mx-auto mt-5">
      <div className="w-[50%] min-h-screen ">
        <img className="w-[90%] h-[60%] " src={image} alt="" />
      </div>
      <div className="py-10">
        <h1 className="font-bold text-3xl mb-3">{name}</h1>
        <p>
          <small className="font-bold">Description : </small>
          {description}
        </p>
        <p className="flex items-center gap-5">
          <small className="font-bold">Rating : </small>{" "}
          <FaStar color="#FFD700"></FaStar>
          {rating}/5
        </p>
        <p>
          <small className="font-bold">Category</small> : {category}
        </p>
        <p>
          <small className="font-bold">Price</small> : {price}$
        </p>
        <p>
          {" "}
          <small className="font-bold">Light</small> : {light}
        </p>
        <p>
          {" "}
          <small className="font-bold">Water</small> : {water}
        </p>
        <p>
          {" "}
          <small className="font-bold">Difficulty</small> : {difficulty}
        </p>
        <button
          onClick={() => handleMyPlantBtn(`${id}`)}
          className=" bg-gray-200 mt-5 px-5 py-2 rounded shadow-2xl flex items-center gap-3 text-sm"
        >
          <ToastContainer></ToastContainer>
          <FaHeart color="#FF0000"></FaHeart> Add To MyPlants
        </button>
      </div>
    </div>
  );
};

export default PlantDetails;
