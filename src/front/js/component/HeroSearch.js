import React from "react";
import { Link } from "react-router-dom";
import Search from "/src/front/js/component/Search"


export const HeroSearch = () => {
	return (
        <div className="container-flex searchSection">
            <div className="mainHero">
                    <h1 className='text-light text-center'>SEARCH RECIPES</h1>
                        <p className="text-light text-center">Search Ingredients, dish type & more</p>
                        <Search>
                            
                        </Search>
            </div>
        </div>
	);
};

export default HeroSearch;


