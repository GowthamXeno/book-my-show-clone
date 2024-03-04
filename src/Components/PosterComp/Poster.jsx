import React from "react";
import { Link } from "react-router-dom";
const Poster = (props) => {
  return (
    <>
      <Link>
        <div>
          <div className="h-40 md:h-80">
            <img
              src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
              alt="Poster"
              className="w-full h-full rounded-lg"
            />
          </div>
          <h3>{props.title}</h3>
        </div>
      </Link>
    </>
  );
};

export default Poster;
