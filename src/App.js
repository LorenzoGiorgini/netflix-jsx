//React modules
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MovieDetails from "./views/MovieDetails";
import Home from "./views/Home";

const App = () => {
  /* state = {
    query: "",
  }; */

  return (
    <div>
      <Router>
        <MyNavbar />
        <Route path="/" exact={true} component={Home} />
        <Route path="/details/:id" component={MovieDetails} />
        <MyFooter />
      </Router>
    </div>
  );
};

export default App;
