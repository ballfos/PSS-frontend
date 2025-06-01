import "./Home.css";
import UserList from "../components/UserList";
import InRoomButton from "../components/InRoomButton";
import React, { useEffect, useState } from "react";
import axios from "axios";

// User type definition
type User = {
  id: string;
  name: string;
  in_room: boolean;
  points: number;
  updated_at: string;
  grade: string;
};

const Home: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [studentId, setStudentId] = useState("");

  // 学籍番号を更新し、localStorageに保存
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStudentId(value);
    localStorage.setItem("studentId", value);
  };
  const ServerURL = "https://pss-backend-ih4c.onrender.com/members";

  const fetchMembers = () => {
    axios
      .get(ServerURL)
      .then((response) => {
        setData(response.data.members); // データを状態に保存
        console.log("取得したデータ:", response.data.members);
      })
      .catch((error) => {
        console.error("データの取得に失敗しました:", error);
      });
  };
  useEffect(() => {
    const savedStudentId = localStorage.getItem("studentId");
    if (savedStudentId) {
      setStudentId(savedStudentId);
    }

    // 初回データ取得
    fetchMembers();
  }, []);

  return (
    <div className="Home">
      {/* 学籍番号入力フォームはここにおきます */}
      <div className="idtext">
        <label>
          ID:{" "}
          <input
            type="text"
            placeholder="00000000"
            value={studentId}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <InRoomButton
        ServerURL={ServerURL}
        studentId={studentId}
        onUpdate={fetchMembers}
      />

      <UserList users={data} />
    </div>
  );
};

export default Home;
