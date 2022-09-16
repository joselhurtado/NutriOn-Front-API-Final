import React from "react";
import { Link } from "react-router-dom";

export const ButtonDiets = () => {
  return (
    <div className="container justify-content-around mt-5 mb-5">
    <div className='row d-flex'>
        <div className="col-sm m-2 btn btn-orange">
          <span>All recipes</span>
        </div>
        <div className="col-sm m-2 btn btn-light">
          <span>Meat</span>
        </div>
        <div className="col-sm m-2 btn btn-light">
          <span>Fish</span>
        </div>
        <div className="col-sm m-2 btn btn-light">
          <span>Milk</span>
        </div>
        <div className="col-sm m-2 btn btn-light">
          <span>Veggies</span>
        </div>
        <div className="col-sm m-2 btn btn-light">
          <span>Sugar</span>
        </div>
        <div className="col-sm m-2 btn btn-light">
          <span>Fast Food</span>
        </div>
      </div>
    </div>
  );
};

export default ButtonDiets;
