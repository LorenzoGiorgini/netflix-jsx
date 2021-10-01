import {Component} from "react"
import SingleMovies from "./SingleMovies"

class MyGalleries extends Component {


    state = {
        movies: [

        ]
    }


    async componentDidMount() {
        try {
          const response = await fetch( "http://www.omdbapi.com/?apikey=e59f0763&s=" + this.props.query);
          const data = await response.json()
          this.setState({ movies: data })
        } catch(e) {
          console.log(e);
        }
    }


    /* e59f0763 */



    render() {
        return (
            <div className=".container-fluid pl-4">
                <h1 className="title shows-title" id="recent">
                    {this.props.query}
                </h1>
                <div className="row">
                    {
                        this.state.movies.Search &&
                        this.state.movies.Search.map((movie , i) => 
                            <SingleMovies key={i} image={movie.Poster} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default MyGalleries