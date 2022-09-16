import React from "react";
import "../../styles/SignUp.css";
import { Link } from "react-router-dom";
import { SignUpFormUser } from "/src/front/js/component/SignUpFormUser";
import HeroWelcome from "/src/front/img/Food Recipe Hero.png";

export const SignUpPage = () => {
	return (
	<div id="welcomePage" className="heroWelcome">
		<div className='row mainHero'>
			<div className="col-sm heroHeadline">
					<h1 className='text-light text-center m-2'>Lets Sign Up</h1>
					<div className="SignupForm">
						<SignUpFormUser/>
					</div>
					<Link to ="/SignupQuestions">
					<div className="SignupFormbtn"><button className="btn btn-primary" id="Questionbuttons">Continue</button>
					</div>
					</Link>
			</div>
				<div className="col-sm ">
					<img className="heroImage" src={HeroWelcome} />
			</div>
		</div>
	</div>
);
};

export default SignUpPage;