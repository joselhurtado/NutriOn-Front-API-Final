import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../js/component/scrollToTop.js";

import { Home } from "../js/pages/Home";
import { LandingPage } from "../js/pages/LandingPage";
import { SearchResults } from "../js/pages/SearchResults";
import { ResetPassword } from "../js/pages/ResetPassword";
import { Login } from "../js/pages/LoginPage";
import { SearchPage } from "../js/pages/SearchPage";

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
import RecipeDetails from "../js/component/RecipeDetails";
import Profile from "../js/pages/Profile";

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

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
          <Route element={<SignUpQuestionsGoalsPage />} path="/SignUpQuestionsGoals" />
          <Route element={<LandingPage />} path="/landingPage" />
          <Route element={<SearchPage />} path="/SearchPage" />

          <Route element={<VeganPage />} path="/VeganPage" />
          <Route element={<VegetarianPage />} path="/VegetarianPage" />
          <Route element={<KetoPage />} path="/KetoPage" />
          <Route element={<PaleoPage />} path="/PaleoPage" />

          <Route element={<WelcomePage />} path="/WelcomePage" />
          <Route element={<RecipeDetails />} path="/recipe/:theid" />
          <Route element={<SearchResults />} path="/SeachResults/:search" />
          <Route element={<h1>404 Not Found!</h1>} />
        </Routes>
        <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);


