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
          // className="aries"
          className="horoscope"
          id="button"
          value="Honeysuckle"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h1>Aries: March 21 – April 20</h1>
                <p>
                  "As the first sign in the zodiac, Aries signifies the start of
                  something new. Aries are known for their youthful tendencies
                  when it comes to interacting with the world around them —
                  passionate, confident, and cheerful. With honeysuckle blooming
                  in early spring, the season most associated with rebirth and
                  new experiences, the two pair perfectly together!"
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
