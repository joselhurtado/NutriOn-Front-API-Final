import React from "react";
import "../../styles/home.css";
import RecipeCardVegan from "/src/front\/js/component/RecipeCardVegan";
import { ButtonDiets } from "/src/front/js/component/ButtonDiets"
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const VeganPage = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 
			<div>
				<ButtonDiets />
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
