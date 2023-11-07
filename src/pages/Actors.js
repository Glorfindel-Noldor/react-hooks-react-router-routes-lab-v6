import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then((data) => setActors(data))
      .catch((error) => console.log(error, "we aint find ship"));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {actors.map((actor, id) => (
          <article key={id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((flick, ActorId) => (
                <li key={ActorId}>
                  <Link to={`/movie/${flick}`}>{flick}</Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
