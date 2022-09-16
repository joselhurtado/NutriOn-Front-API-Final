import React from "react";
import "../../styles/home.css";
import RecipeCardPopular from "/src/front/js/component/RecipeCardPopular";
import { Hero } from "/src/front/js/component/Hero";

export const LandingPage = () => {
	return (
		<div className="container">
			<div>
				<Hero />
			</div>
			<div>
				<h1 className="text-left">Popular Recipes</h1>
				<p className="text-left titleP">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardPopular />
				</div>
			</div>
		</div>
)
}
