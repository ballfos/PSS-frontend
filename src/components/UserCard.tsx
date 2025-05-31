import "./UserCard.css";
export default UserCard;

function UserCard({
  name,
  atendanceCount = 0,
  isPresence,
}: {
  id: number;
  name: string;
  atendanceCount?: number;
  isPresence: boolean;
}) {
  return (
    <div className="user-card">
      <div className="user-info">
        <h2>{name}</h2>
      </div>

      <div className={`status ${isPresence ? "presence" : "notpresence"}`}>
        {isPresence ? "入室中" : "退室中"}
      </div>
      <p>{atendanceCount}</p>
    </div>
  );
}
