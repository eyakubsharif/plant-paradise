import React from "react";
import Banner from "../../components/Banner/Banner";
import { Link, useLoaderData } from "react-router";
import Card from "../../components/Card/Card";
import BenefitCard from "../../components/Card/BenefitCard";

const Home = () => {
  const plants = useLoaderData();
  const { plant, benefit } = plants;

  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <div>
        <h1 className="font-bold text-2xl text-center mt-5 py-5">
          Popular Plants
        </h1>
        <div className="grid grid-cols-4 gap-5">
          {plant
            .filter((plant) => plant.rating >= 4.8)
            .slice(0, 4)
            .map((plant) => (
              <Card plant={plant}></Card>
            ))}
        </div>
        <div className="flex items-center justify-center">
         <Link to={`/plants`}>
             <button className="font-bold text-xs bg-[#355e3b] text-white mx-auto px-5 py-2 rounded-2xl  my-5">
            Explore More Plants
          </button>
         </Link>
        </div>
      </div>
      <div className="py-15">
        <h1 className="font-bold text-2xl text-center py-5 mt-5">
          Why Plants Paradise
          <div className="grid grid-cols-4 mt-2">
            {benefit.map((ben) => (
              <BenefitCard ben={ben}></BenefitCard>
            ))}
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Home;
