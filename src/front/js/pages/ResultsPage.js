import React, { useEffect, useState, useContext } from "react";
import Context from "../store/appContext.js";
import "../../styles/home.css";
import { HeroSearch } from "/src/front/js/component/HeroSearch";
import getState from "../store/flux.js";
import tempImage from "/src/front/img/Hero Healthy Food.png"

export const ResultsPage = (props) => {
  const { store, actions } = useContext(Context);
  console.log(store, ":::Store on Results Page:::")

  return (
    <div className="container">
      <div>
        <HeroSearch />
      </div>
      {store?.recipeResults?.map((recipe, index) => (
          <div
            key={index}
            className="col-sm card m-2 cardShape"
            style={{ minWidth: "18rem" }}
          >
            {/* <img
              src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.${recipe.imageType}`}
              className="card-img-top shapeImageTop"
              alt="recipe Image"
            /> */}
              <img
              src={tempImage}
              className="card-img-top shapeImageTop"
              alt="recipe Image"
            />

            <div className="card-body text-light">
              <h4 className="card-title mb-4">
                <strong>{recipe.title}</strong>
              </h4>
              <div className="d-flex mt-4 justify-content-between">
                <Link to={`/recipe/${recipe.id}`} className="btn btn-orange">
                  Read More
                </Link>
                <a
                  onClick={() => actions.addFavorites(x)}
                  className="btn btn-outline-orange fa fa-heart"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
