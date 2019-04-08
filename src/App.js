import React from 'react';
import FileListing from './FilmListing';
import FilmDetails from './FilmDetails';

const App = () => {
  return (
    <main className="film-library">

    <FileListing />
    <FilmDetails />


    </main>
  );
}

export default App;
