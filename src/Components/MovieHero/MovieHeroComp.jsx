import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import MovieInfoComp from "../MovieHero/MovieInfoComp";

const MovieHeroComp = () => {
  const { movie } = useContext(MovieContext);
  const Vote = movie.vote_average;
  const languagesList = movie.spoken_languages
    ?.map(({ english_name }) => english_name)
    .join(", ");

  // map((each)=> each.english_name)
  console.log(languagesList);
  // const rounded = Vote.toFixed(1);

  const genres = movie.genres?.map(({ name }) => name).join(", ");
  console.log(genres);

  return (
    <>
      <div>
        {/* Mobile and Tablet screen */}
        <div className="lg:hidden w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Cover Poster"
            className="m-4 rounded"
            style={{ width: "calc(100%-2rem)" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>{Vote !== undefined ? Vote.toFixed(1) : "N/A"} / 10</h4>
              <h4>{languagesList}</h4>
              <h4>
                {movie.runtime} min | {genres}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Rent ₹499
            </button>
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Buy ₹999
            </button>
          </div>
        </div>

        {/* Larger Screen */}
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "29rem" }}
        >
          <div
            className="absolute z-20 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgb(34,34,34,0.7),rgb(34,34,34,0.9) 3%,rgb(34,34,34) 6%, rgb(34,34,34) 24.95%, rgb(34,34,34) 30.2%, rgba(34,34,34,0.03) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          >
            <div className="absolute z-30 left-16 top-9 flex itmes-center gap-12">
              <div className="w-64 h-96">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="Movie Poster"
                  className="w-full h-full rounded-lg"
                ></img>
              </div>
              <div className="flex items-center">
                <MovieInfoComp movie={movie} />
              </div>
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="BackDrop Poster"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHeroComp;
