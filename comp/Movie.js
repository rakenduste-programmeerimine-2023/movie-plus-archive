function Movie(props) {
  if (!props.Title) {
    return <p>Movie not found</p>;
  }
  const { Title, Year, Runtime, Genre, Actors, Plot, Poster } = props;
  const text = Title.replace(/^a-z0-9 /i, "").replace(/\s/, "+");
  return (
    <div className="row">
      <div className="col12">
        <h1 style={{ marginTop: 0 }}>{Title}</h1>
      </div>
      <div className="col s5">
        {Poster !== "Not image, sorry :)" ? (
          <img className="img" src={Poster} alt="" />
        ) : (
          <img
            className="img"
            src={`https://via.placeholder.com/300x430.png?text=${text}`}
            alt=""
          />
        )}
      </div>
      <div className="col7">
        <ul style={{ marginTop: 0 }}>
          <li>Year: {Year}</li>
          <li>Runtime: {Runtime}</li>
          <li>Genre: {Genre}</li>
          <li>Actors: {Actors}</li>
        </ul>
        <p>{Plot}</p>
      </div>
    </div>
  );
}

export default Movie;
