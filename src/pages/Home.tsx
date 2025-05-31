import "./Home.css";
import UserList from "../components/UserList";
import React, { useEffect, useState } from "react";
import axios from "axios";

// User type definition
type User = {
  id: string;
  name: string;
  in_room: boolean;
  points: number;
  updated_at: string;
};

const Home: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const ServerURL = "https://pss-backend-ih4c.onrender.com/members";
  useEffect(() => {
    // サーバーからデータを取得
    axios
      .get(ServerURL)
      .then((response) => {
        setData(response.data.members); // データを状態に保存
        console.log("取得したデータ:", response.data.members);
      })
      .catch((error) => {
        console.error("データの取得に失敗しました:", error);
        console.log("取得したデータ:", data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [in_room, setin_room] = useState<boolean>(false);
  return (
    <div className="Home">
      <button
        className={`button-presence ${in_room ? "presence" : "notpresence"}`}
        onClick={() => setin_room(!in_room)}
      >
        {in_room ? "退室する" : "入室する"}
      </button>

      <UserList users={data} />
    </div>
  );
};

export default Home;
