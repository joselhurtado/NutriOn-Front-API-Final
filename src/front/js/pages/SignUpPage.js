import React from "react";
import "../../styles/SignUp.css";
import { Link } from "react-router-dom";
import { SignUpFormUser } from "/src/front/js/component/SignUpFormUser";

export const SignUpPage = () => {
	return (

		
	<div id="welcomePage" className="heroWelcome">
		<div className='row mainHero'>
			<div className="col-sm heroHeadline">
					<h1 className='text-light text-center m-2'>Lets Start your Health Journey.</h1>
					<div className="SignupForm">
						<SignUpFormUser/>
					</div>
					<div className="Userinfo">
					<input className="form-control" type="text" placeholder="Enter your email"id="emailsignup" required></input>
					</div>
					<div className="UserinfoPassword">
						<input className="form-control" type="text" placeholder="Enter your username" required></input>
						<input className="form-control" type="email" placeholder="Enter your password" required></input>
					</div>
					<div className="weightgoal">
						<h5 className="weight-title">What is your weight goal?</h5>
					</div>
					<div className="weightgoalbuttons">
						<div class="d-flex justify-content-center">
							<button class="btn btn-light m-2" type="button" id="weightbtn">Lose Weight</button>
							<button class="btn btn-light m-2" type="button" id="weightbtn">Gain Weight</button>
							<button class="btn btn-light m-2" type="button" id="weightbtn">Maintain Weight</button>
						</div>
						<div className="genderP">
						<h5 className="gender-title">What is your gender?</h5>
						</div>
						<div className="Genderdiv d-flex justify-content-center">
							<button class="btn btn-light m-2" type="button" id="genderbtn">Male</button>
							<button class="btn btn-light m-2" type="button" id="genderbtn">Female</button>
							<button class="btn btn-light m-2" type="button" id="genderbtn">Other</button>
						</div>
					</div>
					<div className="SignupFormbtn space-between">
						<Link to ="/WelcomePage">
						<button className="btn btn-light" id="Questionbuttons1">Go Back</button>
						</Link>
						<Link to ="/SignupQuestions">
						<button className="btn btn-orange" id="Questionbuttons">Continue</button>
						</Link>
					</div>
			</div>
		</div>
	</div>
);
};

export default SignUpPage;