import { useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [cinema , setCinema]=useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/movies')
    .then((res)=>(res.json()))
    .then(data=>setCinema(data))
    .catch((error)=>console.log(error,'we aint find ship'))

  },[])
  
  
  const MovieList = cinema.map((flick)=>(
    <MovieCard title={flick.title} id={flick.id} />
  ))
  
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>
        {MovieList}
      </main>
    </>
  );
};

export default Home;
