import React from 'react';
import TMDB from './TMDB';
import Film from './Film';


const FilmListing = () => {

    const filmList = TMDB.films.map((film) => {
        return (
            <Film film={film} key={film.id} />
        
        )
    })


    return (
        <div className='film-list'>
            <h1 className='section-title'>FILMS</h1>
            {filmList}
        </div>
    )
}

export default FilmListing;


