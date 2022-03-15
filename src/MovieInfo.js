//MovieInfo.js

import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function MovieInfo(){

    // console.log(useParams());

    const { movieId: movie_id } = useParams();

    

    const [movieDetails, setDetails] = useState( {} );

    useEffect( function(){
        axios({
          url: `https://api.themoviedb.org/3/movie/${movie_id}`,
          params: {
            api_key: "2089876d1b6f5a914dd26164d4f96b9b"
          },
        }).then(function(movieInfo){
            setDetails(movieInfo.data);
        })

    }, []);


    return (
      <section className="poster">
        <div className="description">
          <h2>{movieDetails.title}</h2>
          <h3>{movieDetails.tagline}</h3>
          <p>{movieDetails.overview}</p>
        </div>
        <div className="poster-image">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={`Poster for the movie ${movieDetails.title}`}
          />
        </div>
      </section>
    );
}
export default MovieInfo;