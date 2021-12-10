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
          // className="gemini"
          className="horoscope"
          id="button"
          value="Lavender"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h1>Gemini: May 22 – June 21</h1>
                <p>
                  "Lavender’s exuberant appearance perfectly blends with a Gemini’s social and energetic nature. Lavender is known for its diverse uses, similar to a Gemini’s versatile personality. With a distaste for the bland and ordinary, lavender makes the perfect birthday present for the wonderfully unique Gemini in your life."
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
