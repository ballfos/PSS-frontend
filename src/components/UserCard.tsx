import "./UserCard.css";
import attendcoin from "../assets/attendcoin.png";
export default UserCard;

function UserCard({
  name,
  in_room,
  points,
  grade,
}: {
  id: string;
  name: string;
  in_room: boolean;
  points: number;
  updated_at: string;
  grade: string;
}) {
  return (
    <div className="user-card">
      <div className="user-info">
        <h2>
          {grade}
          {` : `}
          {name}
        </h2>
      </div>
      <div className="points">
        <img
          src={attendcoin}
          alt="ポイントアイコン"
          style={{ width: "20px", height: "20px", marginRight: "5px" }}
        />
        <h2>{points}</h2>
      </div>
      <div className={`status ${in_room ? "presence" : "notpresence"}`}>
        {in_room ? "在室中" : "退室中"}
      </div>
    </div>
  );
}
