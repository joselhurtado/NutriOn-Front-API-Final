import React from "react";
import "../../styles/home.css";
import RecipeCardPopular from "/src/front\/js/component/RecipeCardPopular";
import { ButtonDiets } from "/src/front/js/component/ButtonDiets"
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const SearchPage = () => {
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
				<RecipeCardPopular />
				</div>
			</div>

			{/* <div>
				<h1 className="text-left">Vegan Recipes</h1>
				<p className="text-left ">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardVegan />
				</div>
			</div>

			<div>
				<h1 className="text-left">Keto Recipes</h1>
				<p className="text-left ">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardKeto />
				</div>
			</div>

			<div>
				<h1 className="text-left">Paleo Recipes</h1>
				<p className="text-left ">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardPaleo />
				</div>
			</div>

			<div>
				<h1 className="text-left">Vegetarian Recipes</h1>
				<p className="text-left ">Tasty recipes the whole family will love.</p>
				<div>
				<RecipeCardVegetarian />
				</div>
			</div> */}
		</div>
)
}
