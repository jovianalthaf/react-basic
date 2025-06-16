import React, { useState } from "react";

const initialData = {
  name: "",
  message: "",
};
const Counter = () => {
  const [count, setCount] = useState(0);
  const [mahasiswa, setMahasiswa] = useState(initialData);

  const handleDecrement = () => {
    alert("decrement");
    setCount(count - 1);
  };
  const handleIncrement = () => {
    alert("increment");

    setCount(count + 1);
  };
  const handleName = (e) => {
    setMahasiswa({
      ...mahasiswa,
      name: e.target.value,
    });
  };
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <button onClick={handleDecrement}>Kurang</button>
      <p>{count}</p>
      <button onClick={handleIncrement}>Tambah</button>

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
