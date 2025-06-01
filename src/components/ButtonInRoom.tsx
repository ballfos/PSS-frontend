import "./ButtonInRoom.css";
import { useState } from "react";
import axios from "axios";
interface ButtonInRoomProps {
  ServerURL: string;
}
function ButtonInRoom({ ServerURL }: ButtonInRoomProps) {
  const [in_room, setin_room] = useState<boolean>(false);

  const controlInRoom = async () => {
    const newInRoomState = !in_room;
    setin_room(newInRoomState);

    //   .post(`${ServerURL}/25622038`){
    //     in_room: true

    //    }
    try {
      // サーバーに状態を送信
      const response = await axios.patch(`${ServerURL}/25622038`, {
        in_room: true,
      });
      console.log("サーバーの応答:", response.data);
    } catch (error) {
      console.error("サーバーへのリクエストに失敗しました:", error);
    }
  };
  return (
    <button
      className={`button-presence ${in_room ? "presence" : "notpresence"}`}
      onClick={() => controlInRoom()}
    >
      {in_room ? "退室する" : "入室する"}
    </button>
  );
}

export default ButtonInRoom;
