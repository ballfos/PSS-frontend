import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  const isCurrent = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) => (isActive ? "linkButton activeLink" : "linkButton");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <nav>
          <ul>
            <li>
              <NavLink to="/Home" className={isCurrent}>
                ホーム
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendar" className={isCurrent}>
                カレンダー
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={isCurrent}>
                設定
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
