import React from "react";
import "../../styles/home.css";
import  RecipeDetailsPopular from "/src/front/js/component/RecipeDetailsPopular";
import { ButtonDiets } from "/src/front/js/component/ButtonDiets";
import { BMRSection } from "/src/front/js/component/BMRSection";
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const SingleRecipePopularPage = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 
			<div>
				<ButtonDiets />
			</div>
			<div>
				<RecipeDetailsPopular />
			</div>
			<div>
				<BMRSection />
			</div>
		</div>
)
}

export default SingleRecipePopularPage;