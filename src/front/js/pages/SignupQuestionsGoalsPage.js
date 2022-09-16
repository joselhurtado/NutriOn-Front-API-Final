import React from "react";
import "../../styles/SignUp.css";
import { Link } from "react-router-dom";
import { SignupGoals } from "/src/front/js/component/SignupGoals";

export const SignUpQuestionsGoalsPage = () => {
	return (
		<div id="welcomePage" className="heroWelcome">
		<div className='row mainHero'>
			<div className="col-sm heroHeadline2">
					<div className="SignupForm2">
						<SignupGoals/>
					</div>
			</div>
		</div>
	</div>
);
};

export default SignUpQuestionsGoalsPage;