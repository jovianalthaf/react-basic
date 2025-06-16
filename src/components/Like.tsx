import React, { useState } from "react";

const Like = () => {
  const [like, setLike] = useState(true);
  //   let component;
  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={handleLike}>{like ? "❤️ Like" : "💔 Unlike"}</button>
    </div>
  );
};

export default Like;
