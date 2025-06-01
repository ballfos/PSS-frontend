import "./InRoomButton.css";
import { useState } from "react";
import axios from "axios";
interface ButtonInRoomProps {
  ServerURL: string;
  studentId: string;
}
function InRoomButton({
  ServerURL,
  studentId,
  onUpdate,
}: ButtonInRoomProps & { onUpdate: () => void }) {
  const [in_room, setin_room] = useState<boolean>(false);
  const controlInRoom = async () => {
    const newInRoomState = !in_room;
    setin_room(newInRoomState);

    try {
      // サーバーに状態を送信
      const response = await axios.patch(`${ServerURL}/${studentId}`, {
        in_room: newInRoomState,
        studentId: studentId,
      });
      console.log("サーバーの応答:", response.data);
      onUpdate();
    } catch (error) {
      console.error("サーバーへのリクエストに失敗しました:", error);
    }
  };

  return (
    <button
      className={`button-presence ${in_room ? "presence" : "notpresence"}`}
      onClick={() => controlInRoom()}
    >
      {in_room ? "在室中" : "入室する"}
    </button>
  );
}

export default InRoomButton;
