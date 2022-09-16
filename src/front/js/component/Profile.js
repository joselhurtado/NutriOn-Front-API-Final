import React from "react";

export default function Profile() {
  return (
    <div class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-4 pt-4" style={{paddingLeft: "90px"}}>
          <div class="card" style={{ width: "18rem"}}>
            <img
              src="https://images.theconversation.com/files/478225/original/file-20220809-24-orxjcu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              class="card-img-top mx-auto d-block"
              style={{ width: "10rem", borderRadius: "10rem", paddingTop:"10px", paddingBottom:"10px" }}
              alt="..."
            />
            <div class="card-body">
              <h2 class="card-text" style={{textAlign: "center"}}>BEYONCE</h2>
              <h4 style={{textAlign: "center", paddingBottom:"10px"}}>Nutrition Goals</h4>
            </div>
          </div>
        </div>
        <div class="col-8 pt-4" style={{paddingRight:"60px"}}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput3" class="form-label">
              Email Address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput3"
              placeholder="name@example.com"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6" >
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title text-center">Vegetarian Diet</h5>
              <p class="card-text text-center">My Weight Gain Journey</p>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item">Age</li>
                <li class="list-group-item">Weight</li>
                <li class="list-group-item">Height</li>
                <li class="list-group-item">Goal Weight</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card" >
            <div class="card-body d-flex justify-content-center align-items-center flex-column">
              <h5 class="card-title text-center">My Favorite Meals</h5>
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner ">
                    <div class="carousel-item active  " data-bs-interval="2000" >
                      <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=1200,1200" class="d-block " style={{ width:"480px", height:"360px"}} alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000" >
                      <img src="https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" class="d-block" style={{ width:"480px", height:"360px"}} alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src="https://colonydiner.com/wp-content/uploads/2021/03/French.jpg" class="d-block" style={{ width:"480px", height:"360px"}} alt="..." />
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
    </div>
    </div>
  );
}