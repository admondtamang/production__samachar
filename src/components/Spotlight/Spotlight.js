import React from "react";
import "./spotlight.css";
import aside1 from "../../assets/aside1.jpg";
export default function Spotlight() {
  return (
    <div className="spotlight">
      {/* <h2>Spotlight</h2> */}
      <aside className="spotlight__aside">
        <div className="spotlight__container">
          <img src={aside1} alt="aside" />
          <div className="spotlight__content">
            <span className="tag">International</span>

            <h3>How to ask manger for feedback</h3>
            <p className="author">By Rana Satan</p>
          </div>
        </div>
        <div className="spotlight__container">
          <img src={aside1} alt="aside" />
          <div className="spotlight__content">
            <span className="tag">International</span>

            <h3>How to ask manger for feedback</h3>
            <p className="author">By Rana Satan</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
