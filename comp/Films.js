import Card from "./Card";
function Films(props) {
  return (
    <div className="films">
      {props.films && props.films.length ? (
        props.films.map((movie) => (
          <Card
            key={movie.imdbID}
            readMoreHandler={props.readMoreHandler}
            {...movie}
          />
        ))
      ) : (
        <p>Nothing found</p>
      )}
    </div>
  );
}

export default Films;
