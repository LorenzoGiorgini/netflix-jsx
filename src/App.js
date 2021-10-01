import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import DropDown from "./components/DropDown";
import MyGalleries from "./components/MyGalleries";
import MyFooter from "./components/MyFooter";
import React from "react";

class App extends React.Component {
  state = {
    query: "",
  };

  render() {
    return (
      <div>
        <MyNavbar />
        <DropDown />
        <div>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => this.setState({ query: e.target.value })}
          />
          {/* <input
          type="button"
          value="Search"
          onClick={() => this.fetchedData()}
        /> */}
        </div>
        {this.state.query.length > 0 ? (
          <MyGalleries query={this.state.query} />
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
}

export default App;
