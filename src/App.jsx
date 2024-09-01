import { useState } from "react";
import "./App.css";

function App() {
  const [hex, setHex] = useState("#000000");
  const handleHexChange = (e) => {
    setHex(e);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "2rem",
          border: `2px solid ${hex}`,
          borderRadius: "0.8rem",
        }}
      >
        <input
          style={{
            border: `2px solid ${hex}`,
          }}
          type="color"
          onChange={(e) => {
            handleHexChange(e.target.value);
          }}
          value={hex}
        />
        <input
          style={{
            border: `2px solid ${hex}`,
          }}
          type="text"
          value={hex}
        />
      </div>
    </>
  );
}

export default App;
