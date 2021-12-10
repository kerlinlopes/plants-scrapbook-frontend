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
          // className="taurus"
          className="horoscope"
          id="button"
          value="Poppy"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h1>Taurus: April 21 – May 21</h1>
                <p>
                  "People born under the Taurus sign are strong, compassionate, and love being surrounded by love and natural beauty. Despite having beautiful blossoms, poppies are technically classified as weeds — they’re resilient, growing in even the most inhospitable landscapes. Just like a poppy flower, Taurus’s stand their ground, especially on matters they’re passionate about, and exude beauty and positivity."
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
