import React, { useContext, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import MovieInfoComp from "../MovieHero/MovieInfoComp";
import PaymentModal from "../PaymentModal/PaymentComp";
import { FaStar } from "react-icons/fa6";

const MovieHeroComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [state, setstate] = useState("");
  const rentmovie = () => {
    setIsOpen(true);
    setPrice(499);
    setstate("Rent");
  };

  const buymovie = () => {
    setIsOpen(true);
    setPrice(999);
    setstate("Buy");
  };
  const { movie } = useContext(MovieContext);
  const Vote = movie.vote_average;
  const languagesList = movie.spoken_languages
    ?.map(({ english_name }) => english_name)
    .join(", ");

  const genres = movie.genres?.map(({ name }) => name).join(", ");
  console.log(genres);

  return (
    <>
      <div>
        {/* Mobile and Tablet screen */}
        <PaymentModal
          className="z-10"
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          price={price}
          state={state}
        />
        <div className="lg:hidden " style={{ width: "95%" }}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Cover Poster"
            className="m-3 rounded-lg "
            style={{ width: "calc(100%-6rem)" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="text-black flex flex-col gap-3 pl-5">
            <div className="flex items-end gap-2 pt-7">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 ">
                  <FaStar className="w-full h-full text-red-500" />
                </span>
                <h4 className="text-2xl font-semibold text-black">
                  {Vote !== undefined ? Vote.toFixed(1) : "N/A"}/10
                </h4>
              </div>
              <h4>{movie.vote_count} votes</h4>
            </div>
            <div className=" pt-3">
              <span className="pb-0.5 font- rounded-sm text-black">
                Languages : {languagesList}
              </span>
            </div>
            <h4 className="font-medium pb-7 text-black">
              {movie.runtime} min • {genres}
            </h4>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button
              onClick={rentmovie}
              className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
            >
              Rent ₹499
            </button>
            <button
              onClick={buymovie}
              className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
            >
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
