import React from "react";
import "../../styles/home.css";
import  RecipeCardSearchResults from "/src/front/js/component/RecipeCardSearchResults";
import { ButtonDiets } from "/src/front/js/component/ButtonDiets"
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const ResultsPage = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 
			<div>
				<ButtonDiets />
			</div>
			<div>
				<h1 className="text-left">Popular Recipes</h1>
				<p className="text-left">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardSearchResults />
				</div>
			</div>
		</div>
)
}
