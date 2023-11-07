import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Directors() {
  const [directors, setDir] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then((data) => setDir(data))
      .catch((error) => console.log(error, "we ain't found ship"));
  }, []);

  return (
    <>
      <header>
        <NavBar />
        {/* What component should go here? */}
      </header>
      <main>
        {directors.map((director, key) => (
          <article key={key}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, movieKey) => (
                <li key={movieKey}>
                  <Link to={`/movie/${movieKey}`}>{movie}</Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
