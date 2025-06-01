import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ButtonsFooter from "./components/ButtonsFooter";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <ButtonsFooter />
      </div>
    </Router>
  );
}

export default App;
