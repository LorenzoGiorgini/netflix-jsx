const SingleMovies = (props) => (
  <div className="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1">
    <div className="card col-size-style">
      <img
        src={props.image}
        className="card-img-top img-netflix-movies img-fluid w-100 rounded"
      />
    </div>
  </div>
)


export default SingleMovies