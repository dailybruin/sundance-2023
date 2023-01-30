import React from "react";

const LandingGif = (props) => {
  return (
    <React.Fragment>
      <img
        src={props.landing_image}
        alt="landing image"
        style={{ width: "100%", marginRight: "-1", display: "block" }}
      />
    </React.Fragment>
  );
};

export default LandingGif;

//"https://user-images.githubusercontent.com/36126914/154766367-2c3d9c80-3cdc-4790-b15c-7eba5eee9fd2.gif"
