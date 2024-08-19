import Navbar from "./Components/Navbar";
import MoviesSection from "./Components/MoviesSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChoosenMovie from "./Components/ChoosenMovie";

function Cinema() {
  return (
    <section className="cinema">
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path="Cinema/" element={<MoviesSection />} />
          <Route path="Cinema/genre/:genre" element={<MoviesSection />} />
          <Route path="Cinema/search/:search" element={<MoviesSection />} />
          <Route path="Cinema/chosen/:id" element={<ChoosenMovie />} />
        </Routes>
      </Router>
    </section>
  );
}

export default Cinema;
