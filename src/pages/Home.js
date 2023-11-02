import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Movie from "./Movie";

function Home() {
  const [movieInfo, setMovieInfo] = useState({});
  
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((data) => setMovieInfo(data))
      .catch(error => console.error(error, `we ain't found ship!`));
  }, []);

  return (
    <>
      <header>Hello, World!-home
        <NavBar />
        {/* What component should go here? */}
      </header>
      <main>
        {Array.isArray(movieInfo) && movieInfo.map((film, index) => (
          <Movie key={index} movie={film} />
        ))}
      </main>
    </>
  );
}

export default Home;
