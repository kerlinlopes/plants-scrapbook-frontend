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
          // className="aquarius"
          className="horoscope"
          id="button"
          value="orchid"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h1>Aquarius: January 21 – February 19
</h1>
                <p>
                  "Don’t let an Aquarius’ shy demeanor fool you. While they can sometimes be quiet, they’re incredibly energetic and eccentric when around friends they trust. Plus, they’re wonderfully intelligent and diligent problem solvers. Naturally, a strong, yet delicate-looking flower like the orchid makes the perfect gift for an Aquarius. The exotic shape of the plant aligns with the eccentric personality of an Aquarius. This sign may not one to stand in the limelight, but they certainly don’t mind straying from the norm."
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