import "./App.css";

import { useRef } from "react";
import { Route, Routes } from "react-router";

import { NavBar } from "@components";
import { Album, Contact, Gallery, Home, Services } from "@pages";

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
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:albumId" element={<Album />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
