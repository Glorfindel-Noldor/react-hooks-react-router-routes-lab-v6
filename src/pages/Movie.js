import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const [intel , setData] = useState({})
  useEffect(()=>{
    fetch(`http://localhost:4000/`)
    .then((res)=>(res.json()))
    .then((data)=>setData(data))
  },[])



  return (
    <>
      <header>Hello, World! - movie
        <NavBar/>
        {/* What component should go here? */}
      </header>
      <main>
        Movie info here!
        {intel.map((flick)=>(
          <p>{console.log(flick)}</p>
        ))}
      </main>
    </>
  );
};

export default Movie;
