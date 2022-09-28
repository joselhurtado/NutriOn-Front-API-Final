import React from "react";
import "../../styles/home.css";
import  RecipeDetailsKeto from "/src/front/js/component/RecipeDetailsKeto";
import { ButtonDiets } from "/src/front/js/component/ButtonDiets";
import { BMRSection } from "/src/front/js/component/BMRSection";
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const SingleRecipeKetoPage = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 
			<div>
				<ButtonDiets />
			</div>
			<div>
				<RecipeDetailsKeto />
			</div>
			<div>
				<BMRSection />
			</div>
		</div>
)
}

export default SingleRecipeKetoPage;