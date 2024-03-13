import React,{useState} from "react";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialPinterest,
  TiSocialYoutube,
  TiSocialLinkedin,
} from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";

function FooterSm() {}

function FooterLg() {
    const [hovered, setHovered] = useState(false);
  const ButtonStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "50%",
    backgroundColor: hovered ? "#ffffff" : "#303030",
    color: "#333338",
  };
  return (
    <>
      <div id="Footer" className="py-8" style={{ backgroundColor: "#333338" }}>
        <div className="flex items-center justify-center py-8">
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
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={ButtonStyle}
          >
            <TiSocialFacebook />{" "}
          </button>
          <button style={ButtonStyle}>
            {" "}
            <BsTwitterX />{" "}
          </button>
          <button style={ButtonStyle}>
            {" "}
            <TiSocialInstagram />{" "}
          </button>
          <button style={ButtonStyle}>
            {" "}
            <TiSocialYoutube />{" "}
          </button>
          <button style={ButtonStyle}>
            {" "}
            <TiSocialPinterest />{" "}
          </button>
          <button style={ButtonStyle}>
            {" "}
            <TiSocialLinkedin />{" "}
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
