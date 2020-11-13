import React from "react";
import headlineImg from "../../assets/headline.jpg";
import "./headline.css";

export default function Headline() {
  return (
    <div className="headline">
      <img src={headlineImg} alt="headlineImg" />
      <div className="headline__content">
        <span>International</span>
        <h2>Protest against Human right violation by the police. </h2>
        <p>
          A side-by-side comparison of the real Paris and a fake one in China,
          photos of the beauty of children growing up in rural Ohio and more.
        </p>
        <p className="author">By Ramahari Dhakal</p>
      </div>
    </div>
  );
}
