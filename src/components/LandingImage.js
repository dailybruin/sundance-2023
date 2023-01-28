import React, { useState, useRef, useCallback } from "react";
import LandingGif from "./LandingGif";

const LandingImage = (props) => {
  let landingImage = props.landing_image;
  let landingCredits = props.landing_credits;

  // DELETE and REPLACE tempLanding with landingImage once design team finishes
  let tempLanding =
    "https://user-images.githubusercontent.com/36126914/154766367-2c3d9c80-3cdc-4790-b15c-7eba5eee9fd2.gif";

  // DELETE and REPLACE tempCredits with landingCredits once design team finishes
  // and change color --> black
  let tempCredits = "(Credits: Joe Bruin)";

  const gifEndRef = useRef(null);
  const [firstTime, setFirstTime] = useState(true);

  const scroller = useCallback(() => {
    setTimeout(() => {
      if (gifEndRef && gifEndRef.current) {
        gifEndRef.current.scrollIntoView({ behavior: "smooth" });
        setFirstTime(false);
      }
    }, 5000);
  }, [gifEndRef]);

  return (
    <>
      <LandingGif landing_image={landingImage} />
      <div ref={gifEndRef}></div>
      {firstTime ? scroller() : null}
      <span
        style={{
          display: "inline-block",
          float: "right",
          color: "white",
          marginRight: "10px",
          marginTop: "10px",
          fontSize: "16px",
          fontFamily: "Sofia Sans",
        }}
      >
        {landingCredits}
      </span>
    </>
  );
};

export default LandingImage;
