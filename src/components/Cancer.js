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
          // className="cancer"
          className="horoscope"
          id="button"
          value="White Rose"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h1>Cancer: June 22 – July 22</h1>
                <p>
                  "Cancers are known for being highly imaginative and emotional. Though they enjoy the adventure from time to time, Cancers find comfort in sticking to what they know. Like the delicate nature of people born under the feminine zodiac sign of Cancer, white roses are elegant, subtle, and universally adored. White roses are symbolized as pure and innocent, just like a Cancer’s sensitive nature. But, be gentle with this sign, because just like their flower, they have a thorny side too."
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