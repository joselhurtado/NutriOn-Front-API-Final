import React from "react";
import "../../styles/dashboard.css";

export default function Profile() {
  return (
    <div class="container">
      <nav class="navbar navbar-light bg-light"></nav>
      <div class="container">
        <div
          class="row"
          style={{ paddingBottom: "100px", paddingTop: "140px" }}
        >
          <div class="col-sm" style={{ paddingLeft: "30px" }}>
            <div
              class="card profilePicture"
            >
              <img
                src="https://images.theconversation.com/files/478225/original/file-20220809-24-orxjcu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                class="card-img-top mx-auto d-block"
                style={{
                  width: "12rem",
                  borderRadius: "10rem",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
                alt="..."
              />
              <div class="card-body text-light">
                <h1 class="card-text text-light" style={{ textAlign: "center"}}>
                  BEYONCE
                </h1>
                <h4 className="text-light" style={{ textAlign: "center", paddingBottom: "10px" }}>
                  Nutrition Goals
                </h4>
              </div>
            </div>
          </div>
          <div
            class="col-8 pt-4"
            style={{
              paddingRight: "50px",
              paddingLeft: "50px",
              paddingTop: "80px",
              background: "#004C52",
              width: "58%",
              marginLeft: "20px",
            }}
          >
            <h1 class="card-title text-center mt-1 text-light">
                My Information
              </h1>
            <div class="mb-3 pt-4">
              <label for="exampleFormControlInput1" class="form-label fullName">
                Full Name
              </label>
              <input
                type="text"
                class="form-control fullName"
                id="exampleFormControlInput1"
                placeholder="Full Name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput2" class="form-label usernameInput">
                Username
              </label>
              <input
                type="text"
                class="form-control usernameInput"
                id="exampleFormControlInput2"
                placeholder="Username"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput3" class="form-label emailAddressInput">
                Email Address
              </label>
              <input
                type="email"
                class="form-control emailAddressInput"
                id="exampleFormControlInput3"
                placeholder="name@example.com"
              />
            </div>
          </div>
        </div>

        <div
          class="row">
          <div class="col-sm">
            <div class="card p personalDietCircle">
              <div class="card-body innerCircle">
                <h1 class="card-title text-center dietCircleTitle">
                  Vegetarian Diet
                </h1>
                <p class="card-text text-center">My Weight Gain Journey</p>
                <div class="card-text-diet">
                  <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item">Age</li>
                    <li class="list-group-item">Weight</li>
                    <li class="list-group-item">Height</li>
                    <li class="list-group-item">Goal Weight</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card calorie-calculator">
              <h1 class="card-title text-center mt-5 bg-white mb-4">
                Calorie Calculator
              </h1>
              <div class="row">
                <h1 class="card-title text-center m-2 text-muted">My Height</h1>
                <div class="col">
                <label
                  for="exampleFormControlInput3"
                  class="form-label bmiAge"
                >
                </label>
                <input
                  type="text"
                  class="form-control feetInput"
                  id="exampleFormControlInput"
                  placeholder="FEET"
                  /> 
                </div>
                <div class="col">
                  <label
                  for="exampleFormControlInput3"
                  class="form-label"
                >
                </label>
                <input
                  type="text"
                  class="form-control inchesInput"
                  id="exampleFormControlInput"
                  placeholder="INCHES"
                  />
                </div>
                </div>
              <div class="col-sm">
            
              <h1 class="card-title text-center m-2 text-muted">My Weight</h1>

                <label
                  for="exampleFormControlInput3"
                  class="form-label bmiAge"
                >
                </label>
                <input
                  type="text"
                  class="form-control ageInput"
                  id="exampleFormControlInput"
                  placeholder="lbs."
                  />
                  </div>
                <div class="row mb-3 genderRow">
                  <div class="col">
                  <h1 class="col-form-label col-sm-2 pt-0 text-muted gender-label">
                    Gender
                  </h1>
                  </div>
                  <div class="col-sm-10 gender-options">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="option1"
                        checked
                      ></input>
                      <label class="form-check-label" for="gridRadios1">
                        Female
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="option2"
                      ></input>
                      <label class="form-check-label" for="gridRadios2">
                        Male
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios3"
                        value="option3"
                      ></input>
                      <label class="form-check-label" for="gridRadios3">
                        Other
                      </label>
                    </div>
                  </div>
                </div>
              <select
                class="form-select activity-level"
                aria-label="Default select example"
              >
                <option selected>Activity Level</option>
                <option value="1">Sedentary</option>
                <option value="2">Light</option>
                <option value="3">Moderate</option>
                <option value="4">Active</option>
              </select>
              <div class="d-grid gap-2 d-md-block calculate-clear">
                <button
                  class="btn calculate-button"
                  type="button"
                  style={{ backgroundColor: "#05727A", color: "white" }}
                >
                  Calculate
                </button>
                <button class="btn btn-secondary" type="button">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="col-6 favoriteCard">
          <div class="card">
            <div class="card-body d-flex justify-content-center align-items-center flex-column favoriteMeal">
              <h1 class="card-title text-center text-dark">My Favorite Meals</h1>
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner ">
                  <div class="carousel-item active  " data-bs-interval="2000">
                    <img
                      src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=1200,1200"
                      class="d-block "
                      style={{ width: "480px", height: "360px" }}
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img
                      src="https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                      class="d-block"
                      style={{ width: "480px", height: "360px" }}
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img
                      src="https://colonydiner.com/wp-content/uploads/2021/03/French.jpg"
                      class="d-block"
                      style={{ width: "480px", height: "360px" }}
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
        </div>
        </div>
    </div>
  );
}