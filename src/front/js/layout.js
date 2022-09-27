import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../js/component/scrollToTop.js";

import { Home } from "../js/pages/Home";
import { LandingPage } from "../js/pages/LandingPage";
import { ResetPassword } from "../js/pages/ResetPassword";
import { Login } from "../js/pages/LoginPage";
import { ResultsPage } from "./pages/ResultsPage";

import { PopularPage } from "../js/pages/PopularPage";
import { VeganPage } from "../js/pages/VeganPage";
import { VegetarianPage } from "../js/pages/VegetarianPage";
import { KetoPage } from "../js/pages/KetoPage";
import { PaleoPage } from "../js/pages/PaleoPage";

import { WelcomePage } from "../js/pages/WelcomePage";
import { SignUpPage } from "../js/pages/SignUpPage";
import { SignUpQuestionsPage } from "../js/pages/SignUpQuestionsPage";
import { SignUpQuestionsGoalsPage } from "./pages/SignupQuestionsGoalsPage";
import injectContext from "../js/store/appContext";

import { NavBar } from "../js/component/NavBar";
import { Footer } from "../js/component/footer";
import SingleRecipe from "../js/pages/SingleRecipe";
import Profile from "../js/pages/Profile";

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  //State for Search
  const [query, setQuery] = useState("");

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <NavBar />
          <Routes>
            <Route index element={<Home />} path="/" />
            <Route element={<Profile />} path="/dashboard" />
            <Route element={<Login />} path="/LoginPage" />
            <Route element={<ResetPassword />} path="/ResetPassword" />
            <Route element={<SignUpPage />} path="/SignUP" />
            <Route element={<SignUpQuestionsPage />} path="/SignUpQuestions" />
            <Route
              element={<SignUpQuestionsGoalsPage />}
              path="/SignUpQuestionsGoals"
            />
            <Route element={<LandingPage />} path="/landingPage" />
            <Route
              element={<PopularPage query={query} setQuery={setQuery}/>}
              path="/PopularPage"
            />
            <Route element={<VeganPage query={query} setQuery={setQuery} />} path="/VeganPage" />
            <Route
              element={<VegetarianPage query={query} setQuery={setQuery} />}
              path="/VegetarianPage"
            />
            <Route element={<KetoPage query={query} setQuery={setQuery} />} path="/KetoPage" />
            <Route element={<PaleoPage query={query} setQuery={setQuery} />} path="/PaleoPage" />
            <Route
              element={<ResultsPage query={query} setQuery={setQuery} />}
              path="/ResultsPage"
            />
            <Route element={<WelcomePage />} path="/WelcomePage" />
            <Route element={<SingleRecipe />} path="/SingleRecipe/:theid" />
            <Route element={<h1>404 Not Found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
