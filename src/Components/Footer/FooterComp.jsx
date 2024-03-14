import React from "react";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialPinterest,
  TiSocialYoutube,
  TiSocialLinkedin,
} from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { HiVideoCamera } from "react-icons/hi2";
import { PiTelevisionFill } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { Link } from "react-router-dom";
function FooterSm() {
  <div>
    <div>
      <div><Link to="/"><div><HiVideoCamera /><h4>Movies</h4></div></Link></div>
    </div>
  </div>
}


function FooterLg() {
  const ButtonStyle = {
    padding: "6px",
    border: "none",
    borderRadius: "50%",
    color: "#333338",
    objectFit: "cover",
  };
  const iconSize = {
    width: "25px",
    height: "25px",
    fontSize: "14px",
  };
  return (
    <>
      <div id="Footer" className="py-8" style={{ backgroundColor: "#333338" }}>
        <div className="flex items-center justify-center py-8 pt-20">
          <div
            className="flex-1 border-b"
            style={{ borderBottomColor: "#5d5d5f" }}
          ></div>
          <div className="mx-5">
            <img
              src="https://in.bmscdn.com/webin/common/icons/logo.svg"
              alt="BookMyShow Logo"
            ></img>
          </div>
          <div
            className="flex-1 border-b"
            style={{ borderBottomColor: "#5d5d5f" }}
          ></div>
        </div>
        <div className="flex items-center justify-center pb-5 pt-3 gap-3">
          <button
            className="bg-background-100 hover:bg-background-200"
            style={ButtonStyle}
          >
            <TiSocialFacebook style={iconSize} />{" "}
          </button>
          <button
            className="bg-background-100 hover:bg-background-200"
            style={ButtonStyle}
          >
            {" "}
            <FaXTwitter style={iconSize} />{" "}

          </button>
          <button
            className="bg-background-100 hover:bg-background-200"
            style={ButtonStyle}
          >
            {" "}
            <TiSocialInstagram style={iconSize} />{" "}
          </button>
          <button
            className="bg-background-100 hover:bg-background-200"
            style={ButtonStyle}
          >
            {" "}
            <TiSocialYoutube style={iconSize} />{" "}
          </button>
          <button
            className="bg-background-100 hover:bg-background-200"
            style={ButtonStyle}
          >
            {" "}
            <TiSocialPinterest style={iconSize} />{" "}
          </button>
          <button
            className="bg-background-100 hover:bg-background-200"
            style={ButtonStyle}
          >
            {" "}
            <TiSocialLinkedin style={iconSize} />{" "}
          </button>
        </div>
        <div
          className="text-center px-10 py-4"
          style={{ color: "#666666", fontSize: "0.69rem" }}
        >
          <p>
            Copyright 2024 @ Bigtree Entertainment Pvt. Ltd. All Rights
            Reserved.
          </p>
          <p>
            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied. Unauthorized use
            is prohibited and punishable by law.
          </p>
        </div>
      </div>
    </>
  );
}
const FooterComp = () => {
  return (
    <>
      <FooterLg />
    </>
  );
};

export default FooterComp;
