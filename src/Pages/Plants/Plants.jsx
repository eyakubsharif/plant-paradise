import React from "react";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router";
import PlantCard from "../../components/Card/PlantCard";

function Plants() {
  const { plant } = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-bold text-3xl">Explore All Plants</h1>
      <div className="flex gap-3 justify-between items-center py-3">
        <div className="flex justify-between items-center border border-gray-300 w-7/12 rounded px-6 py-2">
          <input type="text" placeholder="Search Here ..." />
          <FaSearch className=""></FaSearch>
        </div>
        <div className="w-3/12">
          <select
            defaultValue="All Categories"
            className="select bg-white border border-gray-300"
          >
            <option disabled={true}>All Categories</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        <div className="w-2/12">
          <select
            defaultValue="Sort By "
            className="select bg-white border border-gray-300"
          >
            <option disabled={true}>Sort By</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {plant?.map((p) => (
          <PlantCard p={p}></PlantCard>
        ))}
      </div>
    </div>
  );
}

export default Plants;
