import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom";

export const Search = () => {
  const { store, actions } = useContext(Context);
  console.log(store, ":::Store on Search Component:::")
  const [text, setText] = useState("");
  const navigate = useNavigate();

  return (
    <form className="container">
      <div className="col-sm text-center m-2">
        <input
          className="form-control"
          placeholder="Search Your Recipe"
          aria-label="Search"
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          autoFocus
        />
        <div className="container text-center m-2">
          <div
            className="btn btnSearch"
            type="submit"
            onClick={(e) => {
              let search = actions.getResultsRecipes(text)
              // e.preventDefault();
              if (search) {
                navigate("/ResultsPage");
              }
            }}
          >
            <span className="fas fa-search"></span> Search
          </div>
        </div>
      </div>
      <h2>
        {store.getResultsRecipes ? (
          <div>
            {store.recipeResults &&
              store.recipeResults.map((item, index) => {
                return (
                  <div key={index} className="row text-center">
                    {item}
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="text-center text-light"></div>
        )}
      </h2>
    </form>
  );
};

export default Search;
