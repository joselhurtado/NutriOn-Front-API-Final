import React from "react";
import "../../styles/home.css";
import RecipeCardKeto from "/src/front\/js/component/RecipeCardKeto";
import { HeroSearch } from "/src/front/js/component/HeroSearch";
import { Link } from "react-router-dom";

export const KetoPage = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 

			<div className="container-flex justify-content-around mt-5 mb-5">
    <div className='row'>

        <Link to="/PopularPage" className="col-sm m-2 btn btn-outline-orange">
          <span>All recipes</span>
        </Link>


        <Link to="/VeganPage" className="col-sm m-2 btn btn-outline-orange">
          <span>Vegan</span>
        </Link>


        <Link to="/VegetarianPage" className="col-sm m-2 btn btn-outline-orange">
          <span>Vegetarian</span>
        </Link>

        <Link to="/KetoPage" className="col-sm m-2 btn btn-orange">
          <span>Keto</span>
        </Link>

        <Link to="/PaleoPage" className="col-sm m-2 btn btn-outline-orange">
          <span>Paleo</span>
        </Link>
      </div>
    </div>

			<div>
				<h1 className="text-left">Keto Recipes</h1>
				<p className="text-left ">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardKeto />
				</div>
			</div>
		</div>
)
}
