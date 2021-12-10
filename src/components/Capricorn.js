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
          // className="capricorn"
          className="horoscope"
          id="button"
          value="Pansy"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h1>Capricorn: December 22 – January 20
</h1>
                <p>
                  "Like a pansy, Capricorns seem to only get better with age! Known for being hardworking and tenacious, Capricorns enjoy showing off the fruits of their labor, similar to a newly sprung, showy pansy. Pansies are a popular bloom in the cooler months. The hardy plant can survive freezing conditions, unlike other plants that typically require sunny or partially sunny positions in well-draining soils. Capricorns, just like their zodiac flower, are warriors, even in the toughest conditions."
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