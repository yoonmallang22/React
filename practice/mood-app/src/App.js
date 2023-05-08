import { useState } from "react";
import DisplayMood from "./components/DisplayMood/DisplayMood";
import MenuList from "./components/MenuList/MenuList";

function App() {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <MenuList
        mood={currentMood}
        onItemClick={setCurrentMood}
      />
      <DisplayMood mood={currentMood} />
    </div>
  );
}
export default App;
