//MovieCatalogue.js
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function MovieCatalogue(){
    // console.log("Catalogue has rendered");
    const [ movies, setMovies ] = useState( [] );

    useEffect( function() {
      // Make async request to api using axios
      // save the returned data within state
      // API Key: 2089876d1b6f5a914dd26164d4f96b9b
    //   console.log('side effect is running');

      axios({
          url: 'https://api.themoviedb.org/3/discover/movie',
          params: {
              api_key: '2089876d1b6f5a914dd26164d4f96b9b',
              include_adult: false
          }
      }).then( function( showMeTheMovies){
        //   console.log(showMeTheMovies);

          setMovies(showMeTheMovies.data.results);

      })


    }, [] );


    return (
      <section>
        <h2>Here are your viewing options:</h2>
        <ul className="catalogue">
            {/* map through state and return movies */}
            {
                movies.map( function(movie){
                    return (
                      <Link to={`/${movie.id}`} key={movie.id}>
                        <li>
                          <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={`Poster for the movie ${movie.title}`}
                          />
                        </li>
                      </Link>
                    );
                })
            }
        </ul>
      </section>
    );
}
export default MovieCatalogue;