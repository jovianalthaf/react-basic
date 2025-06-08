import React from "react";

const HelloWorld = () => {
  return (
    <div>
      <HeaderHelloWorld></HeaderHelloWorld>
      <ParagraphHelloWorld></ParagraphHelloWorld>
    </div>
  );
};

const HeaderHelloWorld = () => {
  const text = "INI HEADER";
  return (
    <h1
      style={{
        color: "red",
        backgroundColor: "aqua",
        fontFamily: "sans-serif",
      }}
    >
      {text.toUpperCase()}
    </h1>
  );
};

const ParagraphHelloWorld = () => {
  const text = "INI PARAGRAF";
  return (
    <p
      style={{
        color: "blue",
        backgroundColor: "yellow",
      }}
    >
      {text.toUpperCase()}
    </p>
  );
};

export default HelloWorld;
