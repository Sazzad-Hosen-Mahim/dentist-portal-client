import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const DentalCare = () => {
  return (
    <div className="card lg:px-40 mt-36 lg:card-side bg-base-100 ">
      <div className="lg:w-1/3 ">
        <figure>
          <img className="rounded-lg" src={treatment} alt="Treatment" />
        </figure>
      </div>
      <div className="card-body lg:w-1/2  lg:py-24 ">
        <h2 className="card-title lg:text-4xl font-bold">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="mt-6 lg:flex-grow-0">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="card-actions">
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
