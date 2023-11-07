import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [showTime, setShowTime] = useState({});
  const params = useParams();
  const movieID = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieID}`) 
      .then((res) => res.json())
      .then((data) => setShowTime(data))
      .catch((error) => console.log(error, "No Ticket!"));
  }, [movieID]); 

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div>
          <h1>{showTime.title}</h1>
          <p>Run time (min): {showTime.time}</p>
          <span>
            <ul>
              {showTime.genres && showTime.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </span>
        </div>
      </main>
    </>
  );
}

export default Movie;
