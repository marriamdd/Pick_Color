import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [hex, setHex] = useState("#000000");

  const handleHexChange = (e) => {
    setHex(e.target.value);
  };

  return (
    <>
      <div
        style={{
          border: `2px solid ${hex}`,
        }}
        className="flex flex-col  items-center justify-between w-[50vw] h-[50vh] rounded-[0.8rem]"
      >
        <input
          style={{
            borderColor: hex,
          }}
          className="mt-[4rem] rounded-[3px] w-[30vw] border-[2px]"
          type="color"
          onChange={handleHexChange}
          value={hex}
        />
        <input
          style={{
            borderColor: hex,
          }}
          className="mb-[4rem] text-[1.6rem] border-[2px] rounded-[3px] text-center"
          type="text"
          value={hex}
          onChange={handleHexChange}
        />
      </div>
    </>
  );
}

export default App;
