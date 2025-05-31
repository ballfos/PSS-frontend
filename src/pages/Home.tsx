import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [isPresence, setIsPresence] = useState<boolean>(false);
  return (
    <div>
        <button className={`button-presence ${isPresence ? 'presence' : 'notpresence'}`} onClick={() => setIsPresence(!isPresence)}>
          {isPresence ? "退室する" : "入室する"}
        </button>
    </div>
  );
}

export default Home;
