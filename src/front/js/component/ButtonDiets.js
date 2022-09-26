import React from "react";
import { Link } from "react-router-dom";

export const ButtonDiets = () => {
  return (
    <div className="container-flex justify-content-around mt-5 mb-5">
    <div className='row'>

        <Link to="/PopularPage" className="col-sm m-2 btn btn-orange">
          <span>All recipes</span>
        </Link>


        <Link to="/VeganPage" className="col-sm m-2 btn btn-orange">
          <span>Vegan</span>
        </Link>


        <Link to="/VegetarianPage" className="col-sm m-2 btn btn-orange">
          <span>Vegetarian</span>
        </Link>

        <Link to="/KetoPage" className="col-sm m-2 btn btn-orange">
          <span>Keto</span>
        </Link>

        <Link to="/PaleoPage" className="col-sm m-2 btn btn-orange">
          <span>Paleo</span>
        </Link>
      </div>
    </div>
  );
};

export default ButtonDiets;
