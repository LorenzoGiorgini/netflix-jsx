import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import DropDown from "./components/DropDown";
import MyGalleries from "./components/MyGalleries";
import MyFooter from "./components/MyFooter";
import React from "react";

const App = () => {
  /* state = {
    query: "",
  }; */

  const [query , setQuery] = useState("")

  
  return (
    <div>
      <MyNavbar />
      <DropDown />
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {query.length > 0 ? (
        <MyGalleries query={query} />
      ) : (
        <>
          <MyGalleries query={"avengers"} />
          <MyGalleries query={"harry potter"} />
          <MyGalleries query={"batman"} />
        </>
      )}
      <MyFooter />
    </div>
  );

}


export default App;