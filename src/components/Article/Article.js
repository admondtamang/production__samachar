import React from "react";
import headlineImg from "../../assets/headline.jpg";
import "./article.css";

export default function Article() {
  return (
    <div className="article">
      <img src={headlineImg} alt="headlineImg" />
      <div className="article__content">
        <span>International</span>
        <h4>Protest against Human right violation by the police. </h4>
        <p>
          A side-by-side comparison of the real Paris and a fake one in China,
          photos of the beauty of children growing up in rural Ohio and more.
        </p>
        <p className="author">By Ramahari Dhakal</p>
      </div>
    </div>
  );
}
