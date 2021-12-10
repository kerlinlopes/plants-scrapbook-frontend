import React, { useState } from "react";
import Popup from "./Popup.js.js";


function Zodiac() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <input
          type="button"
          // className="leo"
          className="horoscope"
          id="button"
          value="Sunflower"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h1>Leo: July 23 – August 22
</h1>
                <p>
                  "Perhaps the only people more social and outgoing than Geminis are those born under the Leo sign. With their happy demeanor bringing a smile to everyone’s face they meet, it’s only natural that their flower is just as “sunny” as them! Sunflowers get their loyal and bright characteristics from their tendency to turn their faces towards the sun. Similarly, Leo’s are not shy when it comes to stepping into the limelight and are attracted to being the center of attention."
                </p>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
}

export default Zodiac;