import React from "react";
import "../../styles/home.css";
import  RecipeDetails from "/src/front/js/component/RecipeDetails";
import { ButtonDiets } from "/src/front/js/component/ButtonDiets";
import { BMISection } from "/src/front/js/component/BMISection";
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const SingleRecipe = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 
			<div>
				<ButtonDiets />
			</div>
			<div>
				<RecipeDetails />
			</div>
			<div>
				<BMISection />
			</div>
		</div>
)
}

export default SingleRecipe;