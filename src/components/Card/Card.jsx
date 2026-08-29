import React from "react";
import { CiLight } from "react-icons/ci";
import { GiChestnutLeaf } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { Link } from "react-router";

const Card = ({ plant }) => {
  console.log(plant);
  const { name, image, price, description, category } = plant;
  return (
    <div className="shadow-xl p-2 rounded-2xl border border-gray-100">
      <img className="w-full rounded-2xl h-65" src={image} alt="" />
      <div className="py-2">
        <p className="font-bold ">{name}</p>
        <div className="flex justify-between">
          <p className="text-[#355E3B] mb-1 flex items-center gap-3">
            <GiChestnutLeaf></GiChestnutLeaf>
            {category}
          </p>{" "}
          <span className="-translate-y-6 font-bold text-[#355E3B]">
            {price}$
          </span>
        </div>
        <p className="line-clamp-2">{description}</p>
        <Link to={`/plantDetails/${plant.id}`}>
          <button className="bg-[#355e3b] px-5 rounded-2xl py-2 text-white shadow-2xl text-xs font-bold mt-1">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
