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
          // className="pisces"
          className="horoscope"
          id="button"
          value="Water Lily"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h1>Pisces: February 20 – March 20
</h1>
                <p>
                  "With their element being water and symbol being the two fish, perhaps no pair goes together better than a water lily and a Pisces. With a knack for art and all things whimsical, Pisces enjoy unique shows of affection. This water sign is known for being quite dreamy, imaginative, and sensitive. Their attitude for life is similar to the environment of water lily’s — shallow ponds, lakes, and the edges of slow-moving streams. The charming Pisces is all about going with the flow."
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