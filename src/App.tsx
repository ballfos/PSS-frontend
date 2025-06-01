import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FooterButtons from "./components/FooterButtons";
import CalendarPage from "./pages/Calendar";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  return (
    <Router basename="/PSS-frontend">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <FooterButtons />
      </div>
    </Router>
  );
}

export default App;
