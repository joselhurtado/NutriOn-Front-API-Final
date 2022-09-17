import React from 'react';
import "../../styles/SignUp.css";

export const SignUpFormUser= () => {
    return (
        <div className="form-user">
            <input className="form-control" type="text" placeholder="Enter your First Name" required></input>
            <input className="form-control" type="email" placeholder="Enter your Last Name" required></input>
        </div>
        );
}

export default SignUpFormUser
