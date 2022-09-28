import React from "react";
import "../../styles/home.css";
import  RecipeDetailsPaleo from "/src/front/js/component/RecipeDetailsPaleo";
import { ButtonDiets } from "/src/front/js/component/ButtonDiets";
import { BMRSection } from "/src/front/js/component/BMRSection";
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const SingleRecipePaleoPage = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 
			<div>
				<ButtonDiets />
			</div>
			<div>
				<RecipeDetailsPaleo />
			</div>
			<div>
				<BMRSection />
			</div>
		</div>
)
}

export default SingleRecipePaleoPage;