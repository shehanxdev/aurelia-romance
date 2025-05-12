import "./App.css";

import { Home } from "@pages";
import { useScrollSections } from "./hooks";

function App() {
  useScrollSections(2);
  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
