import React from "react";
import Header from "../../components/Header/Header";
import headlineImg from "../../assets/headline.jpg";
import "./post.css";

export default function Post() {
  return (
    <>
      <div className="app__container">
        <Header />
      </div>
      <div className="post__container">
        <div className="post__heading">
          <span className="tag">International</span>
          <h2>Protest against Human right violation by the police. </h2>
          <div className="post__author">
            <p>Ramahari Dhakal</p>
            <p className="author">2020 Feb 9</p>
          </div>
        </div>
        <div className="post__content">
          <img src={headlineImg} alt="headlineImg" />
          <p>
            A side-by-side comparison of the real Paris and a fake one in China,
            photos of the beauty of children growing up in rural Ohio and more.
          </p>
        </div>
      </div>
    </>
  );
}
