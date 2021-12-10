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
          // className="scorpio"
          className="horoscope"
          id="button"
          value="Geranium"
          onClick={togglePopup}
        />
        {isOpen && (
          <Popup
            content={
              <>
                <h1>Scorpio: October 24 – November 22
</h1>
                <p>
                  "Like the many petals of geraniums, Scorpios have many sides to them and never let anyone fully know what they’re thinking. Once you think you know a Scorpio, they’re quick to show you another, completely unexpected side of themselves. These symmetrical five-petal zodiac flowers grow in tight bunches, similar to a Scorpio’s tendency to keep a small circle of close friends and family around them. A Scorpio’s small circle will get to know a more sensitive side despite the outside world seeing them as a mystery. The geranium flower comes in many colors, just like Scorpios — expect the unexpected from them."
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