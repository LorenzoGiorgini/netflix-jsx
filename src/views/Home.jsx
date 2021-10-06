import React, { useState } from "react";
import DropDown from "../components/DropDown";
import MyGalleries from "../components/MyGalleries";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <>
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
    </>
  );
}


export default Home