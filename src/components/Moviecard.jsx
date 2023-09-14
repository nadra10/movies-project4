import  "./moviecard.css"
import React from "react";

export default function  Moviecard ({movie}) {
console.log(movie)
    //function to return loaded JSX
    const loaded = () => {
       
     return (
         <div className="movie-container">
     <h2>{movie.title}</h2>
     {/* <p>
     <strong>Genres:</strong>{movie.genre_ids}</p> */}
     <p><strong>Overview:</strong>{movie.overview}</p>
     <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title} />
               <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Vote Average:</strong> {movie.vote_average}
          </p>
     </div>
     )
   }

 
 const loading = () => {
     return <h1>No Movie to Display</h1>
 }
 return movie ? loaded() : loading();
 }
 



























// import React from 'react';

// const Moviecard = ({movie, type}) => {
//     const loaded = () => {
//         return (
//             <div className='moviecard'>
// <img src={movie.Poster_path} alt= {movie.title}></img>
//             </div>
//         )
//     }

//     const loading = () => {
//         return <h1>No Movie to Display</h1>
//     }

//     return (
// movie ? loaded() : loading()
       
//     );
// }

// export default Moviecard;
