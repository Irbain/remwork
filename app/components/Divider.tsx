import React from "react";

const Divider = () => {
  return (
    <div className="my-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        fill="#FACC15"
      >
        <path d="M0 0v100l500-48 500 48V0H0z" opacity=".5"></path>
        <path d="M0 0h1000v52H0z" opacity=".5"></path>
        <path d="M0 0v4l500 48 500-48V0H0z" opacity=".5"></path>
        <path d="M0 0v4l500 48 500-48V0H0z"></path>
      </svg>
    </div>
  );
};

export default Divider;
