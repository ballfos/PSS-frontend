import "./UserCard.css";
export default UserCard;

function UserCard({
  name,
  in_room,
}: {
  id: string;
  name: string;
  in_room: boolean;
  points: number;
  updated_at: string;
}) {
  return (
    <div className="user-card">
      <div className="user-info">
        <h2>{name}</h2>
      </div>

      <div className={`status ${in_room ? "presence" : "notpresence"}`}>
        {in_room ? "入室中" : "退室中"}
      </div>
      {/* <p>{atendanceCount}</p> */}
    </div>
  );
}
