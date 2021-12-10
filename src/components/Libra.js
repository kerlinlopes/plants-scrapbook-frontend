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
          // className="libra"
          className="horoscope"
          id="button"
          value="Rose"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h1>Libra: September 24 – October 23
</h1>
                <p>
                  "Just like a classic rose, Libras are adored by everyone they meet. As a symbol of peace and love, roses perfectly complement a Libra’s passion for justice and strong sense of right and wrong. Libra’s can often mesh into any social atmosphere as their calm demeanors and outgoing personalities can easily put a smile on anyone’s face, similar to the rose. Just like the Libras contagious warmth, roses also grow as weeds all around the world. They can’t help but spread the love everywhere they go!"
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