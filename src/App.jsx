import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";

function App() {
  return (
    <div className="bg-gray-100 h-full w-screen">
    <Router>
      
        <Routes>
          <Route path="/services" element={<Services />} />
        </Routes>
      
      
    </Router>
    </div>
  );
}

export default App;