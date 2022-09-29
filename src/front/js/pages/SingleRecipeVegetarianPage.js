import React from "react";
import "../../styles/home.css";
import  RecipeDetailsVegetarian from "/src/front/js/component/RecipeDetailsVegetarian";
import { BMRSection } from "/src/front/js/component/BMRSection";
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const SingleRecipeVegetarianPage = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 
			<div>
				<RecipeDetailsVegetarian />
			</div>
			<div>
				<BMRSection />
			</div>
		</div>
)
}

export default SingleRecipeVegetarianPage;