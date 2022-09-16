import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import NavLogo from "/src/front/img/Logo_NutriON_White.png"

export const NavBar = () => {
	const {store, actions} = useContext(Context); //Const to call store data from Flux (Actions is not used yet)

	return (
		<div className="navbar navbar-expand-md fixed-top">
			<div className="container">
				<Link to="/">
					<img className="NavLogo" src={NavLogo} alt="NutriOn Logo"/>
				</Link>
				<div className="dropdown">
				<Link to="/LoginPage">
					<span className="btn btn-orange m-2" href="#" role="button">
					LOG IN
					</span>
				</Link>
				<button className="btn dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="true">
				<span className="fa fa-heart"/>{`Favorites (${store.favorites.length})`}
						</button>
						<div className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton">
							{store.favorites.map((item, index) => {
								return(
									<div key={index}>
										<a className="align-middle dropdown-item">{item.title}
										<span onClick={() => actions.removeFavorites(index)}className="fa fa-trash"></span></a>
										<li><hr className="dropdown-divider" /></li>
									</div>
								)
							})}
						</div>
				</div>
			</div>
		</div>
	);
};
