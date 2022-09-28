import React from "react";
import "../../styles/home.css";
import  RecipeDetailsVegan from "/src/front/js/component/RecipeDetailsVegan";
import { ButtonDiets } from "/src/front/js/component/ButtonDiets";
import { BMRSection } from "/src/front/js/component/BMRSection";
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const SingleRecipeVeganPage = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 
			<div>
				<ButtonDiets />
			</div>
			<div>
				<RecipeDetailsVegan />
			</div>
			<div>
				<BMRSection />
			</div>
		</div>
)
}

export default SingleRecipeVeganPage;