import React from "react";
import "../../styles/home.css";
import RecipeCardVegan from "/src/front\/js/component/RecipeCardVegan";
import { Link } from "react-router-dom";
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const VeganPage = () => {
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


        <Link to="/VeganPage" className="col-sm m-2 btn btn-orange">
          <span>Vegan</span>
        </Link>


        <Link to="/VegetarianPage" className="col-sm m-2 btn btn-outline-orange">
          <span>Vegetarian</span>
        </Link>

        <Link to="/KetoPage" className="col-sm m-2 btn btn btn-outline-orange">
          <span>Keto</span>
        </Link>

        <Link to="/PaleoPage" className="col-sm m-2 btn btn btn-outline-orange">
          <span>Paleo</span>
        </Link>
      </div>
    </div>

			<div>
				<h1 className="text-left">Vegan Recipes</h1>
				<p className="text-left ">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardVegan />
				</div>
			</div>
		</div>
)
}
