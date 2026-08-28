import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router";

const PlantCard = ({ p }) => {

  const { image, id, name, description, rating, price } = p;

  
  return (
    <div>
      <img className="w-full h-50" src={image} alt="" />
      <div className="flex gap-10">
        <p className="font-bold">{name}</p>
        <p className="flex items-center gap-2">
          {" "}
          <FaStar color="#FFD700"></FaStar>
          {rating}
        </p>
      </div>
      <p>
        <small>{description}</small>
      </p>
      <Link to={`/plantDetails/${id}`}>
        <button
       
        className="bg-amber-400 px-5 py-2 mt-2 rounded shadow-2xl font-bold text-xs"
      >
        View Details
      </button>
      </Link>
    </div>
  );
};

export default PlantCard;
