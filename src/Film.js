import React from 'react';
import FilmPoster from './FilmPoster';

const Film = ({film}) => {
    return (
    <article className='film-row'>
     <FilmPoster film={film} />
        <div className='film-summary'>
            <h1>{film.title}</h1>
            <p>{new Date(film.release_date).getFullYear()}</p>
        </div>
    </article>
    )
}

export default Film;