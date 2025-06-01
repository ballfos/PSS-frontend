import UserCard from "./UserCard";
import "./UserList.css";
import { User } from "../interfaces/User";
interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  // 入室中の人を優先的に表示するためにソート
  const sortedUsers = [...users].sort((a, b) => {
    if (a.in_room === b.in_room) return 0;
    return a.in_room ? -1 : 1; // 入室中の人を前に
  });
  return (
    <div className="userList">
      {sortedUsers.map((user, index) => (
        <UserCard
          id={user.id}
          name={user.name}
          //   atendanceCount={user.atendanceCount}
          in_room={user.in_room}
          points={user.points}
          updated_at={user.updated_at}
          grade={user.grade}
        />
      ))}
    </div>
  );
};

export default UserList;
