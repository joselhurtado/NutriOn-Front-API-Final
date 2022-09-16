import React from 'react';
import "../../styles/SignUp.css";

export const SignupFormQuestions= () => {
    return (
        <div className="form-user2">
            <h5 className="question-title">What is your sex?</h5>
            <button className="btn btn-primary">Male</button><button className="btn btn-primary">Female</button>
            <h5 className="question-title">What is your preferred diet?</h5>
            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="DropdownDiet">Select your diet of choice!</button>
            <ul className="dropdown-menu" id='dietdropDown'>
            <li><a className="dropdown-item" href="#">All Options</a></li>
            <li><a className="dropdown-item" href="#">Vegetarian</a></li>
            <li><a className="dropdown-item" href="#">Vegan</a></li>
            <li><a className="dropdown-item" href="#">Keto</a></li>
            <li><a className="dropdown-item" href="#">Paleo</a></li>
            </ul>
            <h5 classNameName="question-title">What is your height?</h5>
            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="DropdownDiet">Select Height</button>
            <ul className="dropdown-menu" id='dietdropDown'>
            <li><a className="dropdown-item" href="#">5'3</a></li>
            <li><a className="dropdown-item" href="#">5'4</a></li>
            <li><a className="dropdown-item" href="#">5'5</a></li>
            <li><a className="dropdown-item" href="#">5'6</a></li>
            <li><a className="dropdown-item" href="#">5'7</a></li>
            <li><a className="dropdown-item" href="#">5'8</a></li>
            <li><a className="dropdown-item" href="#">5'9</a></li>
            <li><a className="dropdown-item" href="#">5'10</a></li>
            <li><a className="dropdown-item" href="#">5'11</a></li>
            <li><a className="dropdown-item" href="#">6'0</a></li>
            <li><a className="dropdown-item" href="#">6'1</a></li>
            <li><a className="dropdown-item" href="#">6'2</a></li>
            <li><a className="dropdown-item" href="#">6'3</a></li>
            </ul>
        </div>
    );
}

export default SignupFormQuestions
