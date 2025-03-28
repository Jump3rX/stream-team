import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Listen from "./components/Listen.jsx";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <NavBar />

        <div className="flex flex-col flex-1 lg:ml-64 transition-all duration-300">
          <main className="p-6 flex-grow bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listen" element={<Listen />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
