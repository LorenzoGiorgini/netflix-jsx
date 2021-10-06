import { useEffect , useState } from "react";
import MySpinner from "../components/MySpinner";
import Alert from "react-bootstrap/Alert";
import { Badge, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const MovieDetails = ({ match }) => {

    const [movieChosen , setMovieChosen] = useState(null)
    const [comments , setComments] = useState(null)
    const [loading , setLoader] = useState(false)
    const [errorMsg , setErrorMsg] = useState("")

    //Fetch the chosen movie
    const fetchMovie = async (movieClicked) => {
        try {
            setLoader(true);
            const response = await fetch(
              "http://www.omdbapi.com/?apikey=e59f0763&i=" + movieClicked
            );
            const data = await response.json();
            if(data) {
              console.log(data)
              setMovieChosen(data)
              setLoader(false)
              setErrorMsg("")
            }
        } catch (error) {
            setErrorMsg("movie not found");
        }
    }

    //Fetch the comments of the chosen movie
    const fetchComments = async (movieClicked) => {
        try {
            setLoader(true);
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + movieClicked , {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWNlNjRiYjUzZDAwMTViMTllY2UiLCJpYXQiOjE2MzM1Mjc5MTEsImV4cCI6MTYzNDczNzUxMX0.F2HXgaKR_ihOBpsXI4BmUJ5eRf43cEHcdeZ0INeXlTQ"
                }
                }
            )
            const data = await response.json();
            if(data) {
              console.log(data)
              setComments(data)
              setLoader(false)
              setErrorMsg("")
            }
        } catch (error) {
            setErrorMsg("movie not found");
        }
    }

    //ComponentDidMount
    useEffect(() => {
        //New URLparams but in react 
        let movieClicked = match.params.id
        //Fetching functions
        fetchMovie(movieClicked)
        fetchComments(movieClicked)
    }, [])


    return (

        movieChosen !== null &&
        <Container>
            <Row>
                <Col>
                    <Card className="card-movie-details">
                        <Card.Img className="img-styled" variant="top" src={movieChosen.Poster} />
                        <Card.Body>
                            <Card.Title>{movieChosen.Title}</Card.Title>
                            <Card.Text className="text-dotted-ovf">
                                {
                                    movieChosen.Plot
                                }
                            </Card.Text>
                            <Badge>
                                {
                                    movieChosen.Title
                                }
                            </Badge>
                            <ListGroup>
                                
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )


}
  
export default MovieDetails;