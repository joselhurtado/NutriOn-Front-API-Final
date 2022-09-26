import React from "react";
import "../../styles/home.css";
import RecipeCardPaleo from "/src/front/js/component/RecipeCardPaleo";
import { ButtonDiets } from "/src/front/js/component/ButtonDiets";
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const PaleoPage = () => {
  return (
    <div className="container">
      <div>
        <HeroSearch />
      </div>
      <div>
        <ButtonDiets />
      </div>

      <div>
        <h1 className="text-left">Paleo Recipes</h1>
        <p className="text-left ">Tasty recipes the whole family will love.</p>
        <div>
          <RecipeCardPaleo />
        </div>
      </div>
    </div>
  )
};
