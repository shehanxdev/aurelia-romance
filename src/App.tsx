import "./App.css";

import { useRef } from "react";
import { Route, Routes } from "react-router";

import { NavBar } from "@components";
import { AboutMe, Gallery, Home, Services } from "@pages";

// Add your navbar
import { Layout } from "./Layout";

function App() {
  const layoutRef = useRef<any>(null);

  return (
    <div className="h-screen overflow-auto">
      <NavBar layoutRef={layoutRef} />
      <Layout ref={layoutRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
