import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const ResetPassword = () => {
	return (
	<div id="welcomePage" className="heroWelcome">
		<div className='row mainHero'>
			<div className="col-sm heroHeadline">
				<h1 className='text-light text-center m-2'>Forgot your password</h1>
					<p className="text-light text-center m-2">Please enter the email address you’d like your password reset information sent to</p>
					
				<div className="container introBTN">
					<label for="formGroupExampleInput" className="form-label text-light">Enter Email Adrress</label>
					<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
					</div>
					<div className="container mt-2">
					
				<Link to="/dashboard">
					<span className="container btn btn-orange mt-4" href="#" role="button">
					RESET PASSWORD
					</span>
				</Link>
				</div>

		
			</div>

		</div>
	</div>
);
};

export default ResetPassword;