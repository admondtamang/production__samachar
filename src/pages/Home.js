import React from "react";
import { useQuery } from "react-query";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Headline from "../components/Headline/Headline";
import Spotlight from "../components/Spotlight/Spotlight";
import ReactQuill from "../components/Editor/QuillEditor";

import "./home.css";
// import { ReactQueryDevtools } from "react-query-devtools";
export default function Home() {
  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch(
  //     "https://api.github.com/repos/tannerlinsley/react-query"
  //   ).then((res) => res.json())
  // );

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  return (
    <div className="app__container">
      <Header />
      <div className="app__body">
        <Headline />
        <Spotlight />
      </div>
      <ReactQuill theme="snow" placeholder={"write here"} />
      <div className="app__news_article">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
      <Footer />
    </div>
  );
}
