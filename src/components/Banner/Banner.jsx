import React from "react";
import banner from "../../assets/plant-banner.jpg";
const Banner = () => {
  return (
    <div className="py-10">
      <img className="w-full h-130 rounded-2xl" src={banner} alt="" />
      <div className="absolute ml-40 text-center -translate-y-100 p-5  space-y-3 text-white w-7/11 mx-auto">
        <h1 className="font-bold text-4xl">🌿 Bring Nature Into Your Home </h1>
        <p className="font-bold text-sm">
          {" "}
          Discover beautiful plants for your home │ │ and learn how to take care
          of them.{" "}
        </p>
        <button className="btn">Explore More Plants</button>
      </div>
    </div>
  );
};

export default Banner;
