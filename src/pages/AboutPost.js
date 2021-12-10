import React from "react";
import Aries from "../components/Aries";
import Taurus from "../components/Taurus";
import Gemini from "../components/Gemini";
import Cancer from "../components/Cancer";
import Leo from "../components/Leo";
import Virgo from "../components/Virgo"
import Libra from "../components/Libra"
import Scorpio from "../components/Scorpio"
import Sagittarius from "../components/Sagittarius"
import Capricorn from "../components/Capricorn"
import Aquarius from "../components/Aquarius"
import Pisces from "../components/Pisces"

const AboutPost = (props) => {
  return (
    <div className="flowers">
  
      <br /> <br /> <br />
      <div className="honeysuckle"></div>
      <Aries />
      
      <br /> <br /> <br />
      <div className="poppy"></div>
      <Taurus />
      
      <br /> <br /> <br />
      <div className="lavender"></div>
      <Gemini />
  
      <br /> <br /> <br />
      <div className="whiterose"></div>
      <Cancer />

      <br /> <br /> <br />
      <div className="sunflower"></div>
      <Leo />

      <br /> <br /> <br />
      <div className="buttercup"></div>
      <Virgo />

      <br /> <br /> <br />
      <div className="rose"></div>
      <Libra />

      <br /> <br /> <br />
      <div className="geranium"></div>
      <Scorpio />

      <br /> <br /> <br />
      <div className="carnation"></div>
      <Sagittarius />

      <br /> <br /> <br />
      <div className="pansy"></div>
      <Capricorn />
     
      <br /> <br /> <br />
      <div className="orchid"></div>
      <Aquarius />
      
      <br /> <br /> <br />
      <div className="waterlily"></div>
      <Pisces />

    </div>
  );
};

export default AboutPost;