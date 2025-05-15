import { Navbar } from "@components";
import { Home } from "@pages";
import { ReactLenis } from "lenis/react";
import "./App.css";

function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        autoRaf: true,
      }}
    >
      <div className="">
        <Navbar />

        <Home />
      </div>
    </ReactLenis>
  );
}

export default App;
