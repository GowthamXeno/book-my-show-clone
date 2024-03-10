import React from "react";
import { Link } from "react-router-dom";
const Poster = (props) => {
  const isDark = props.isDark ? props.isDark : false;

  function Containcomponet() {
    return (
      <>
        <div className="flex flex-col  items-start gap-2 px-1 md:px-3 w-36 md:w-60">
          <div className="h-40 md:h-80">
            <img
              src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
              alt="Poster"
              className="w-full h-full rounded-lg"
            />
          </div>
          <h3
            className={`text-sm font-bold md:text-lg ${
              props.isDark ? "text-white" : "text-gray-700"
            }`}
          >
            {props.title && props.title}
            {props.name && props.name}
          </h3>
        </div>
      </>
    );
  }
  if (props.linking) {
    return (
      <>
        <Link to={`/movie/${props.id}`}>
          <Containcomponet />
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Containcomponet />
      </>
    );
  }
};

export default Poster;
