import React from "react";
import "./home-hero.css";
import Fade from "react-reveal/Fade";
import ImgArrow from "../imgs/shared/arrow.png";

export default props => (
  <Fade>
    <div className="home-hero">
      <div className="content-main">
        <div className="hi h1 light">Hey there! </div>
        <div className="name h1">
          I'm a product designer and creative technologist building better
          experiences on and off the web.{" "}
        </div>
      </div>
    </div>
  </Fade>
);
