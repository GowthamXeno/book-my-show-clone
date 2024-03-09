import React, { useContext, useState } from "react";
import { MovieContext } from "../../Context/MovieContext";
import { FaStar } from "react-icons/fa6";
import PaymentModal from "../PaymentModal/PaymentComp";

const MovieInfoComp = () => {
  const { movie } = useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", ");
  const Vote = movie.vote_average;
  const languagesList = movie.spoken_languages
    ?.map(({ english_name }) => english_name)
    .join(" • ");
  const [isOpen,setIsOpen] = useState(false);
  const [price,setPrice] = useState(0);

  const rentmovie = ()=>{
      setIsOpen(true);
      setPrice(499);
  }
  
  const buymovie = () => {
    setIsOpen(true);
    setPrice(999);
  };
  return (
    <>
      <PaymentModal className="z-10" setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col items-">
        <h1 className="text-white text-4xl font-bold ">
          {movie.original_title}
        </h1>
        <div className="text-white flex flex-col gap-3">
          <div className="flex items-end gap-2 pt-7">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 ">
                <FaStar className="w-full h-full text-red-500" />
              </span>
              <h4 className="text-2xl font-semibold">
                {Vote !== undefined ? Vote.toFixed(1) : "N/A"}/10
              </h4>
            </div>
            <h4>{movie.vote_count} votes</h4>
          </div>
          <div className=" pt-3">
            <span className="pb-0.5 font- rounded-sm">
              Languages : {languagesList}
            </span>
          </div>
          <h4 className="font-medium pb-7">
            {movie.runtime} min • {genres}
          </h4>
        </div>
        <div className="flex items-start w-96 gap-3 text-xl py-4">
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
    </>
  );
};

export default MovieInfoComp;
