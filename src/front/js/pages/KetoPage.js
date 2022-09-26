import React from "react";
import "../../styles/home.css";
import RecipeCardKeto from "/src/front\/js/component/RecipeCardKeto";
import { ButtonDiets } from "/src/front/js/component/ButtonDiets"
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const KetoPage = () => {
	return (
		<div className="container">
			<div>
				<HeroSearch />
			</div> 
			<div>
				<ButtonDiets />
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
