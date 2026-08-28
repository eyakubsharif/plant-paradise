import React from "react";

const BenefitCard = ({ ben }) => {
  console.log(ben);
  return (
    <div className="text-center">
      <h1 className="font-bold text-sm mb-2">{ben.title}</h1>
      <p className="font-normal text-xs">{ben.description}</p>
    </div>
  );
};

export default BenefitCard;
