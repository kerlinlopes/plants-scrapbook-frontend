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
          // className="virgo"
          className="horoscope"
          id="button"
          value="Buttercup"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h1>Virgo: August 23 – September 23
</h1>
                <p>
                  "Virgos may not always want to be the center of attention, but don’t let their shyness fool you. Once you get to know them, their fun-loving personality begins to show. Just like the subtly beautiful buttercup, Virgos are organized, neat, and enjoy (occasionally) blending into the background. The flowers most often symbolize neatness because of their sophisticated structure and design."
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