import { useState } from "react";
const initialData = {
  name: "",
  message: "",
};
export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [mahasiswa, setMahasiswa] = useState(initialData);

  const handleDecrement = () => {
    setCount(count - 1);

    if (count <= 0) {
      setCount(0);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleName = (e) => {
    setMahasiswa({
      ...mahasiswa,
      name: e.target.value,
    });
  };

  return {
    count,
    handleDecrement,
    handleIncrement,
    handleName,
    handleReset,
    mahasiswa,
  };
};
