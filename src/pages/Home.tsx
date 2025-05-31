import React, { useState } from "react";
import "./Home.css";
import UserCard from "../components/UserCard";
function Home() {
  const [isPresence, setIsPresence] = useState<boolean>(false);
  return (
    <div className="Home">
      <button
        className={`button-presence ${isPresence ? "presence" : "notpresence"}`}
        onClick={() => setIsPresence(!isPresence)}
      >
        {isPresence ? "退室する" : "入室する"}
      </button>
      <UserCard name="山田 太郎" atendance-count={5} isPresence={isPresence} />
    </div>
  );
}

export default Home;
