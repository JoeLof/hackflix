import './index.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import MovieCatalogue from './MovieCatalogue';
import MovieInfo from './MovieInfo';


function App() {
  return (
    <div className="wrapper">
      
      {/* This app consists of 3ccomponents: header, movie catalogue and movie details that is rendered on movie select */}
      <Header />

      {/* Now we need to define our routing config (this is often done within the app component) */}
      {/* Step#1 use the Routes component to act as a parent container to all of the subsequently defined Routes AKA defined URL Paths */}
      <Routes>
        {/* Step # 2 define the individual Routes/URL paths which are available within your app as well as the components which are visible at those paths */}
        <Route path="/" element={ <MovieCatalogue /> } />
        <Route path='/:movieId' element={ <MovieInfo />} />
      </Routes>


      {/* Movie Catalogue */}
      {/* This component is only visible on the homepage */}

      {/* Movie Details */}
    </div>
  );
}

export default App;
