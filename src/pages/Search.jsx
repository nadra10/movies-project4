import {useState, useEffect} from "react";
import Form from '../components/Form';
import Moviecard from "../components/Moviecard";
import  './search.css'
import React from "react"





export default function App() {
 
  const apiKey = "c3f9fa646764b2c15f2c65f130d65f76";

  
  const [movie, setMovie] = useState(null);

  // Function to getMovies
   const getMovie = async (searchTerm) => {
   
    const response = await fetch(
     
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${apiKey}`
    );



    const data = await response.json();
   console.log(data)
    setMovie(data.results);
  }






  
  useEffect(() => {
    getMovie("");
  }, []);
   
  return (
    <div className="Serch">
      <Form moviesearch={getMovie} />
      < Moviecard movie={movie?.[0]} />
    </div>
  );


  }