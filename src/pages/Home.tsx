import React, { useState } from "react";
import "./Home.css";
import UserList from "../components/UserList";
const Home: React.FC = () => {
  // サーバーから渡されるデータの例
  const users = [
    { id: 1, name: "Alice", atendanceCount: 5, isPresence: true },
    { id: 2, name: "Bob", atendanceCount: 3, isPresence: false },
    { id: 3, name: "Charlie", atendanceCount: 8, isPresence: true },
    { id: 4, name: "David", atendanceCount: 2, isPresence: false },
    { id: 5, name: "Eve", atendanceCount: 6, isPresence: true },
    { id: 6, name: "Frank", atendanceCount: 4, isPresence: false },
    { id: 7, name: "Grace", atendanceCount: 7, isPresence: true },
    { id: 8, name: "Heidi", atendanceCount: 1, isPresence: false },
    { id: 9, name: "Ivan", atendanceCount: 9, isPresence: true },
    { id: 10, name: "Judy", atendanceCount: 0, isPresence: false },
  ];
  const [isPresence, setIsPresence] = useState<boolean>(false);
  return (
    <div className="Home">
      <button
        className={`button-presence ${isPresence ? "presence" : "notpresence"}`}
        onClick={() => setIsPresence(!isPresence)}
      >
        {isPresence ? "退室する" : "入室する"}
      </button>

      <UserList users={users} />
    </div>
  );
};

export default Home;
