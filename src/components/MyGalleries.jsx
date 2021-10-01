import {Component} from "react"
import SingleMovies from "./SingleMovies"
import MySpinner from "./MySpinner"
import Alert from "react-bootstrap/Alert"

class MyGalleries extends Component {


    state = {
        movies: [

        ],
        query: this.props.query,
        loading: false,
        errorMsg: ""
    }



    fetchedData = async () => {
        try {
            this.setState({loading: true})
            const response = await fetch( "http://www.omdbapi.com/?apikey=e59f0763&s=" + this.state.query);
            const data = await response.json()
            console.log(data)
            this.setState({ movies: data, loading: false, errorMsg: "" })
        } catch(error) {
            this.setState({errorMsg: error.message})
        }
    }


    async componentDidMount() {
        this.fetchedData()
    }



    render() {
        return (
            <>
                <div>
                    <input type="text" placeholder="Search..." onChange={(e) => this.setState({query: e.target.value})}/>
                    <input type="button" value="Search" onClick={() => this.fetchedData()} />
                </div>
                
                <div className=".container-fluid pl-4">
                    <h1 className="title shows-title" id="recent">
                        {this.state.query}
                    </h1>
                    <div className="row">
                        {
                            this.state.errorMsg && 
                            <Alert variant="warning">
                                Cannot load the data: {this.state.errorMsg}
                            </Alert>
                            
                        }
                        {
                            this.state.loading && <MySpinner />
                        }
                        {
                            this.state.movies.Search &&
                            this.state.movies.Search.map((movie , i) => 
                                <SingleMovies key={i} image={movie.Poster} />
                            )
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default MyGalleries