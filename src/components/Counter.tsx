import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const {
    count,
    handleDecrement,
    handleIncrement,
    handleName,
    handleReset,
    mahasiswa,
  } = useCounter();
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <button onClick={handleDecrement}>Kurang</button>
      <p>{count}</p>
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleReset}>RESET</button>

      <input
        type="text"
        placeholder="Name"
        value={mahasiswa.name}
        onChange={handleName}
      />
      <p style={{ border: "10px", borderColor: "red" }}>{mahasiswa.name}</p>
    </div>
  );
};

export default Counter;
