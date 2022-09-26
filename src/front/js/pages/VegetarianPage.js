import React from "react";
import "../../styles/home.css";
import RecipeCardVegetarian from "/src/front/js/component/RecipeCardVegetarian";
import { ButtonDiets } from "/src/front/js/component/ButtonDiets";
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const VegetarianPage = () => {
  return (
    <div className="container">
      <div>
        <HeroSearch />
      </div>
      <div>
        <ButtonDiets />
      </div>

      <div>
        <h1 className="text-left">Vegetarian Recipes</h1>
        <p className="text-left ">Tasty recipes the whole family will love.</p>
        <div>
          <RecipeCardVegetarian />
        </div>
      </div>
    </div>
  );
};
