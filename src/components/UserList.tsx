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
  return (
    <div className="userList">
      {users.map((user, index) => (
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
