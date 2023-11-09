function Films(props) {
  return (
    <div className="films">
      {props.films.length ? (
        props.films.map((movie) => <div />)
      ) : (
        <p>Nothing found</p>
      )}
    </div>
  );
}

export default Films;
