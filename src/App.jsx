import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Listen from "./components/Listen.jsx";
import About from "./components/About";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <NavBar />
          <main className="ml-64 p-6 w-full min-h-screen bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listen" element={<Listen />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
