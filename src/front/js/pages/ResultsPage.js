import React, { useContext } from "react";
import Context from "../store/appContext.js";
import "../../styles/home.css";
import { HeroSearch } from "/src/front/js/component/HeroSearch";

export const ResultsPage = (props) => {
  const { store, actions } = useContext(Context);
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
            <img
              src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.${recipe.imageType}`}
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
