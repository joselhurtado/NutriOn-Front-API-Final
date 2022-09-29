import React, { useState, useEffect, useContext } from "react";
import "../../styles/dashboard.css";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import RecipeCardPopular from "/src/front/js/component/RecipeCardPopular";
import { BMRSection } from "/src/front/js/component/BMRSection";

export default function Profile({
  firstName = "",
  LastName = "",
  Email = "",
  UserName = "",
}) {
  const { store, actions } = useContext(Context); //Const to call store data from Flux (Actions is not used yet)
  const [userdata, setuserData] = useState({})
  const [userdatatwo, setuserDatatwo] = useState({})
  useEffect(
    () => {
      setuserData(store.usersignupstats);
      setuserDatatwo(store.usersignupstatstwo)
    },
    [store] // In Here we call out again to keep stored the data on re-load the page
  );
	console.log(store.usersignupstats)

  return (
    <div id="dashboardProfile" className="container">
      <div className="container-flex">
        <div className="row">
          <div className="col-sm card text-center" style={{background:"none"}}>
            <img id="profilePicture"
              src="https://images.theconversation.com/files/478225/original/file-20220809-24-orxjcu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h1 className="card-text">{userdata.firstName}</h1>
              <h4>Nutrition Goals</h4>
              <p>{userdata.weightgoal}</p>
            </div>
          </div>
          <div className="col-sm">
            <h1 className="card-title text-center mt-1">My Information</h1>
            <div>
              <label
                for="exampleFormControlInput1"
                className="form-label fullName"
              >
                {userdata.firstname + " " + userdata.lastname}
              </label>
              <input
                type="text"
                className="form-control fullName"
                id="exampleFormControlInput1"
                placeholder={userdata.firstName + " " + userdata.lastName}
              />
            </div>
            <div className="mb-3">
              <label
                for="exampleFormControlInput2"
                className="form-label usernameInput"
              ></label>
              <input
                type="text"
                className="form-control usernameInput"
                id="exampleFormControlInput2"
                placeholder={userdata.userName}
              />
            </div>
            <div className="mb-3">
              <label
                for="exampleFormControlInput3"
                className="form-label emailAddressInput"
              >
                {Email}
              </label>
              <input
                type="email"
                className="form-control emailAddressInput"
                id="exampleFormControlInput3"
                placeholder={userdata.emailsignup}
              />
            </div>
          </div>
        </div>

        {/* Diet and Calculator Section */}

        <div className="row bmiDiet">
          <div className="col-sm">
            <div className="card p personalDietCircle">
              <div className="card-body innerCircle">
                <h1 className="card-title text-center dietCircleTitle">
                  {userdatatwo.diet} Diet
                </h1>
                <p className="card-text text-center">My Weight Gain Journey</p>
                <div className="card-text-diet">
                  <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">{userdatatwo.age}</li>
                    <li className="list-group-item">{userdatatwo.weight}</li>
                    <li className="list-group-item">
                      {userdatatwo.feet + "'" + userdatatwo.inches}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
				<BMRSection />
			</div>

      <div>
        <RecipeCardPopular />
      </div>

      {/* Slider Meals Section */}

      {/* <div className="col-6 favoriteCard">
        <div className="card">
          <div className="card-body d-flex justify-content-center align-items-center flex-column favoriteMeal">
            <h1 className="card-title text-center text-dark">
              My Favorite Meals
            </h1>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className="carousel-item active  " data-bs-interval="2000">
                  <img
                    src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=1200,1200"
                    className="d-block "
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://colonydiner.com/wp-content/uploads/2021/03/French.jpg"
                    className="d-block"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}