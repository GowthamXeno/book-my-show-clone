import React, { useContext } from 'react'
import { MovieContext } from '../../Context/MovieContext'

const MovieInfoComp = () => {
  const {movie} = useContext(MovieContext);
  const genres = movie.genres?.map(({name}) => name).join(", ");
  const Vote = movie.vote_average;
  const languagesList = movie.spoken_languages
    ?.map(({ english_name }) => english_name)
    .join(", ");
  return (
    <div>
      <h1 className="text-white text-5xl font-bold">{movie.original_title}</h1>
      <div className='text-white flex flex-col gap-2'>
        <h4>{Vote !== undefined ? Vote.toFixed(1) : "N/A"}/10</h4>
        <h4>{languagesList}</h4>
        <h4>
          {movie.runtime} min | {genres}
        </h4>
      </div>
      
    </div>
  );
}

export default MovieInfoComp