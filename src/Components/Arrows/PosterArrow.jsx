import React from "react";

export function NextArrowPoster(props) {
  return (
    <>
      <div
        className={props.className}
        style={{
          backgroundColor: "#b0b0b5",
          width: "19px",
          height: "19px",
          borderRadius: "50%",
        }}
        onClick={props.onClick}
      ></div>
    </>
  );
}
export function PrevArrowPoster(props) {
  return (
    <>
      <div
        className={props.className}
        style={{
          backgroundColor: "#b0b0b5",
          borderRadius: "50%",
          width: "19px",
          height: "19px",
        }}
        
        onClick={props.onClick}
      ></div>
    </>
  );
}
