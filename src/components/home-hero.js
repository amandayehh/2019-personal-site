import React from "react";
import "./home-hero.css";
import Fade from "react-reveal/Fade";
import ImgArrow from "../imgs/shared/arrow.png";

export default props => (
  <Fade>
    <div className="home-hero">
      <div className="content">
        <div className="h1">
          I’m a product designer and creative technologist building better
          experiences on and off the web
        </div>
      </div>
    </div>
  </Fade>
);
