import { User } from "../../../lib/models";
import Text from "../../atoms/text";
import s from "./user-list.module.css";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <ul className={s.list}>
      {users.map(u => (
        <li key={u.email + u.number}>
          <Text>
            Email: {u.email}; Number: {u.number}
          </Text>
        </li>
      ))}
    </ul>
  );
}
