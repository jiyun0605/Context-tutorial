import React from "react";
import ColorBox from "./Components/ColorBox";
import { ColorProvider } from "./Context/color";
import SelectColors from "./Components/SelectColor";
function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
