import "./ButtonInRoom.css";
import { useState } from "react";

function ButtonInRoom() {
  const [in_room, setin_room] = useState<boolean>(false);

  const controlInRoom = () => {
    setin_room(!in_room);
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
