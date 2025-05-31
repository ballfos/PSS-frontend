import UserCard from "./UserCard";
import "./UserList.css";

interface User {
  id: number;
  name: string;
  atendanceCount: number;
  isPresence: boolean;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  // 入室中の人を優先的に表示するためにソート
  const sortedUsers = [...users].sort((a, b) => {
    if (a.isPresence === b.isPresence) return 0;
    return a.isPresence ? -1 : 1; // 入室中の人を前に
  });
  return (
    <div className="userList">
      {sortedUsers.map((user, index) => (
        <UserCard
          id={user.id}
          name={user.name}
          atendanceCount={user.atendanceCount}
          isPresence={user.isPresence}
        />
      ))}
    </div>
  );
};

export default UserList;
