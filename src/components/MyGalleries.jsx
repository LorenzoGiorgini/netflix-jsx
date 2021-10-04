import { Component } from "react";
import SingleMovies from "./SingleMovies";
import MySpinner from "./MySpinner";
import Alert from "react-bootstrap/Alert";

class MyGalleries extends Component {
  state = {
    movies: [

    ],
    loading: false,
    errorMsg: ""
  };

  setterOfInput = (obj) => {
    this.setState(obj)
  }


  fetchedData = async () => {
    try {
      this.setState({ loading: true });
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=e59f0763&s=" + this.props.query
      );
      const data = await response.json();
      console.log(data);
      if(data.Search) {
        this.setState({ movies: data.Search, loading: false, errorMsg: "" });
      }
    
    } catch (error) {
      this.setState({ errorMsg: "not found" });
    }
  };

  async componentDidMount() {
    this.fetchedData();
  }

  componentDidUpdate(prevProps) {
      if(prevProps.query!==this.props.query) {
        this.fetchedData();
      }
  }

  render() {
    return (
      <>
        <div className=".container-fluid pl-4">
          <h1 className="title shows-title" id="recent">
            {this.props.query}
          </h1>
          <div className="row">
            {this.state.errorMsg && (
              <Alert variant="warning">
                Cannot load the data: {this.state.errorMsg}
              </Alert>
            )}
            {this.state.loading && <MySpinner />}
            {
              this.state.movies.map((movie, i) => (
                <SingleMovies key={i} image={movie.Poster} />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default MyGalleries;