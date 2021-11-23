import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>FOOD JOURNAL</h1>
        <Typed
          className="typed-text"
          strings={["Stay Fit", "Live Healthy", "Track Calories"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">Contact Us</a>
      </div>
    </div>
  )
}

export default Header