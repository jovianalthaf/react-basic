import React from "react";
import "./HelloWorld.css";
const HelloWorld = () => {
  const props = {
    text: "hello world from spread syntax",
  };
  return (
    <div>
      <HeaderHelloWorld {...props}></HeaderHelloWorld>
      <ParagraphHelloWorld></ParagraphHelloWorld>
    </div>
  );
};

export const HeaderHelloWorld = ({ text = "lupa" }) => {
  return <h1 className="title">{text.toUpperCase()}</h1>;
};

const ParagraphHelloWorld = () => {
  const text = "INI PARAGRAF";
  return <p className="content">{text.toUpperCase()}</p>;
};

export default HelloWorld;
