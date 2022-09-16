import React from 'react';
import "../../styles/SignUp.css";


export const SignUpFormUser= () => {
    return (
        <div className="form-user">
            <input className="form-control" type="text" placeholder="Enter your username" ></input>
            <input className="form-control" type="email" placeholder="Enter your password" ></input>
        </div>
        );
}

export default SignUpFormUser
