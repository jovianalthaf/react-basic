import { useState } from "react";

export const SayHelloForm = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Hello WORLD");
    
  const handleClick = (e) => {
    e.preventDefault(); // mencegah reload halaman
    setGreeting(`Hello ${name}`);
  };
  return (
    <div>
      <form action="">
        <input
          id="input_name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClick}>Say Hello</button>
      </form>
      <h1 id="text_hello">{greeting}</h1>
    </div>
  );
};
