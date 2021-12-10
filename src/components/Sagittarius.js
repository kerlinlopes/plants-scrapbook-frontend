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
          // className="sagittarius"
          className="horoscope"
          id="button"
          value="Carnation"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h1>Sagittarius: November 23 – December 21
</h1>
                <p>
                  "Like a carnation, those born under the sign of Sagittarius are strong, yet beautiful. With Sagittarius’ being known for their love of love, it makes sense that these zodiac flowers are paired with one of the most commonly chosen wedding flowers! Carnations are a symbol of love because they are often the most long-lasting flowers in a bouquet. Sagittarius’s are a fire sign, known for their adventurousness, just as a carnation blooms in branched or forked clusters. The fire sign does not like being tamed and will always carry an open mind in their endeavors."
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