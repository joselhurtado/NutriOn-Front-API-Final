import React from "react";
import { Link } from "react-router-dom";
import VeganCollection from "/src/front/img/collections/Vegan_Collection.png";
import VegetarianCollection from "/src/front/img/collections/Vegetarian_Collection.png";
import GlutenFreeCollection from "/src/front/img/collections/GlutenFree_Collection.png";
import KetoCollection from "/src/front/img/collections/Keto_Collection.png";
import PaleoCollection from "/src/front/img/collections/Paleo_Collection.png";
import PescetarianCollection from "/src/front/img/collections/Pescetarian_Collection.png";
import NoRestrictionsCollection from "/src/front/img/collections/NoRestrictions_Collection.png";

export const RecipeCollection = () => {
  return (
    <div className="container RecipeSection">
    <h1 className="text-center">Explore Recipes</h1>
    <p className="text-center">What would you like to cook today?</p>

    <div className="row m-2">
        <div className="col-sm-4 ">
        <div className="card bg-dark text-white">
            <img
            className="card-img"
            src={VeganCollection}
            alt="Vegan Collection image"
            />
                <div className="card-img-overlay">
                <Link to="/VeganPage">
                <h5 className="card-title ">Vegan<br />Recipes</h5>
                </Link>
                </div>
            </div>
        </div>

        <div className="col-sm-4">
        <div className="card bg-dark text-white">
            <img
            className="card-img"
            src={VegetarianCollection}
            alt="Vegetarian Collection image"
            />
            <div className="card-img-overlay">
            <Link to="/VegetarianPage">
            <h5 className="card-title">Vegetarian<br />Recipes</h5>
            </Link>
            </div>
        </div>
        </div>

        <div className="col-sm-4">
        <div className="card bg-dark text-white">
            <img
            className="card-img"
            src={KetoCollection}
            alt="Keto Collection image"
            />
            <div className="card-img-overlay">
            <Link to="/KetoPage">
            <h5 className="card-title">Keto<br />Recipes</h5>
            </Link>
            </div>
        </div>
        </div>

        <div className="col-sm-4">
        <div className="card bg-dark text-white">
            <img
            className="card-img"
            src={PaleoCollection}
            alt="Paleo Collection image"
            />
                <div className="card-img-overlay">
                <Link to="/KetoPage">
                <h5 className="card-title">Paleo<br />Recipes</h5>
                </Link>
                </div>
            </div>
            </div>

            <div className="col-sm-4">
        <div className="card bg-dark text-white">
            <img
            className="card-img"
            src={KetoCollection}
            alt="Explore All Collection image"
            />
            <div className="card-img-overlay cardOrange">
            <Link to="/PopularPage">
            <h5 className="card-title">Explore All<br />Recipes<span className="fa fa-arrow-right"></span></h5>
			</Link>
            </div>
        </div>
        </div>
        </div>


    </div>
);
};

export default RecipeCollection;
