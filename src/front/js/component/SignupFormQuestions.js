// import React from 'react';
// import "../../styles/SignUp.css";

// export const SignupFormQuestions= () => {
//     return (
//         <div className="form-user2">
//             <h5 className="question-title">What is your sex?</h5>
//             <button className="btn btn-primary">Male</button><button className="btn btn-primary">Female</button>
//             <h5 className="question-title">What is your preferred diet?</h5>
//             <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="DropdownDiet">Select your diet of choice!</button>
//             <ul className="dropdown-menu" id='dietdropDown'>
//             <li><a className="dropdown-item" href="#">All Options</a></li>
//             <li><a className="dropdown-item" href="#">Vegetarian</a></li>
//             <li><a className="dropdown-item" href="#">Vegan</a></li>
//             <li><a className="dropdown-item" href="#">Keto</a></li>
//             <li><a className="dropdown-item" href="#">Paleo</a></li>
//             </ul>
//             <h5 classNameName="question-title">What is your height?</h5>
//             <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="DropdownDiet">Select Height</button>
//             <ul className="dropdown-menu" id='dietdropDown'>
//             <li><a className="dropdown-item" href="#">5'3</a></li>
//             <li><a className="dropdown-item" href="#">5'4</a></li>
//             <li><a className="dropdown-item" href="#">5'5</a></li>
//             <li><a className="dropdown-item" href="#">5'6</a></li>
//             <li><a className="dropdown-item" href="#">5'7</a></li>
//             <li><a className="dropdown-item" href="#">5'8</a></li>
//             <li><a className="dropdown-item" href="#">5'9</a></li>
//             <li><a className="dropdown-item" href="#">5'10</a></li>
//             <li><a className="dropdown-item" href="#">5'11</a></li>
//             <li><a className="dropdown-item" href="#">6'0</a></li>
//             <li><a className="dropdown-item" href="#">6'1</a></li>
//             <li><a className="dropdown-item" href="#">6'2</a></li>
//             <li><a className="dropdown-item" href="#">6'3</a></li>
//             </ul>
//         </div>
//     );
// }

// export default SignupFormQuestions

//////////////////////////////////////

import React from 'react';
import "../../styles/SignUp.css";
import { Context } from '../store/appContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignupFormQuestions(){
    const {store, actions} = useContext(Context); //Const to call store data from Flux (Actions is not used yet)
    const [datatwo, setdatatwo] = useState({
        diet: "",
        feet: "",
        inches: "",
        weight: "",
        age: "",
        activity: ""
    })
    function handle(e) {
        const newDatatwo = { ...datatwo };
        newDatatwo[e.target.id] = e.target.value;
        setdatatwo(newDatatwo);
        console.log(newDatatwo);
      }
      let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", datatwo);
    actions.addsignupDatatwo(datatwo);
    navigate("/dashboard");}

    console.log(datatwo)
    return (
        <form onSubmit={handleSubmit}>
        <div className="heroWelcome" id='welcomePage'>
            <div className="row mainHero">
                <div className="col-sm heroHeadline2">
                    <h1 className="text-light text-center m-2">
                        {" "}
                        Tell us about yourself!
                    </h1>
                    <div className="SignupForm2">
                        <div className="genderP">
                        <p className="gender-title">Select your ideal diet?</p>
                        </div>
                    </div>
                        <div className="dietcheckboxes">
                            <div className="form-check form-check-inline">
                        <input
                            onClick={(e) => {
                                setdatatwo({ ...datatwo, diet: "Vegan"});
                              }}
                            className="form-check-input"
                            type="radio"
                            name='dietname'
                            id="inlineCheckbox1"
                            value="option1"
                        ></input>
                        <label className="form-check-label" for="inlineCheckbox1">
                        Vegan
                        </label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input 
                            onClick={(e) => {
                                setdatatwo({ ...datatwo, diet: "Vegetarian"});
                              }}
                            className="form-check-input"
                            type="radio"
                            name='dietname'
                            id="inlineCheckbox2"
                            value="option2"
                        ></input>
                        <label className="form-check-label" for="inlineCheckbox2">
                        Vegetarian
                        </label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input
                        onClick={(e) => {
                            setdatatwo({ ...datatwo, diet: "Gluten free"});
                          }}
                            className="form-check-input"
                            type="radio"
                            name='dietname'
                            id="inlineCheckbox2"
                            value="option2"
                        ></input>
                        <label className="form-check-label" for="inlineCheckbox2">
                        Gluten Free
                        </label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input
                        onClick={(e) => {
                            setdatatwo({ ...datatwo, diet: "Keto"});
                          }}
                            className="form-check-input"
                            type="radio"
                            name='dietname'
                            id="inlineCheckbox2"
                            value="option2"
                        ></input>
                        <label className="form-check-label" for="inlineCheckbox2">
                        Keto
                        </label>
                        </div>
                        <div className="2nddietcheckboxes">
                            <div className="form-check form-check-inline">
                                <input
                                onClick={(e) => {
                                    setdatatwo({ ...datatwo, diet: "Paleo"});
                                  }}
                                    className="form-check-input"
                                    type="radio"
                                    name='dietname'
                                    id="inlineCheckbox1"
                                    value="option1"
                                ></input>
                                <label className="form-check-label" for="inlineCheckbox1">
                                Paleo
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input
                            onClick={(e) => {
                                setdatatwo({ ...datatwo, diet: "Pescatarian"});
                              }}
                                className="form-check-input"
                                type="radio"
                                name='dietname'
                                id="inlineCheckbox2"
                                value="option2"
                            ></input>
                            <label className="form-check-label" for="inlineCheckbox2">
                                Pescatarian
                            </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                onClick={(e) => {
                                    setdatatwo({ ...datatwo, diet: "No restriction"});
                                  }}
                                    className="form-check-input"
                                    type="radio"
                                    name='dietname'
                                    id="inlineCheckbox2"
                                    value="option2"
                                ></input>
                                <label className="form-check-label" for="inlineCheckbox2">
                                    No restrictions
                                </label>
                            </div>
                        </div>
                        <div className="BMItitle container align-between">
                            <p className="BMIinfo ">
                            BODY MASS INDEX (BMI) IS A MEASURE OF BODY FAT BASED ON
                            HEIGHT AND WEIGHT THAT APPLIES TO ADULT MEN AND WOMEN
                            </p>
                        </div>
                        <div className="BMIheight">
                            <input
                            onChange={(e) => setdatatwo({ ...datatwo, feet:e.target.value })}
                            className="feet" placeholder="Feet"></input>
                            <input 
                            onChange={(e) => setdatatwo({ ...datatwo, inches:e.target.value })}
                            className="inch" placeholder="Inches"></input>
                            <input 
                            onChange={(e) => setdatatwo({ ...datatwo, weight:e.target.value })}
                            className="weightBtn" placeholder="Weight"></input>
                            <input 
                            onChange={(e) => setdatatwo({ ...datatwo, age:e.target.value })}
                            className="age" placeholder="Age"></input>
                        </div>
                        <div className="BMIinfo">
                            <p className="BMIactivity">How active are you?</p>
                            <div className="BMIactivitybtn">
                                <div className="threebtnweight">
                                    <button
                                    onClick={(e) => {
                                        setdatatwo({ ...datatwo, activity: "Light activity" });
                                    }}
                                        className="btnactivity"
                                        value={"Light"}
                                        type="button"
                                        id="activitybtn"
                                    >
                                        Light
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setdatatwo({ ...datatwo, activity: "Moderately active" });
                                        }}
                                        className="btnactivity"
                                        type="button"
                                        id="activitybtn"
                                    >
                                        Moderate
                                    </button>
                                    <button
                                    onClick={(e) => {
                                        setdatatwo({ ...datatwo, activity: "Active" });
                                      }}
                                        className="btnactivity"
                                        type="button"
                                        id="activitybtn"
                                    >
                                        Active
                                    </button>
                                </div>
                                <div className="SignupFormbtn">
                                    <button
                                        className="btn btn-orange"
                                        id="Questionbuttons1"
                                    >
                                        Go Back
                                    </button>
                                    <button
                                        className="btn btn-orange"
                                        id="Questionbuttons"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
}

export default SignupFormQuestions
