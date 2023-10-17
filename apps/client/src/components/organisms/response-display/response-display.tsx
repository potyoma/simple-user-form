import type { Error as ErrorModel, User } from "../../../lib/models";
import Error from "../../molecules/error";
import UserList from "../user-list/user-list";
import s from "./response-display.module.css";

interface ResponseDisplayProps {
  error?: ErrorModel;
  users?: User[];
}

export default function ResponseDisplay({
  error,
  users,
}: ResponseDisplayProps) {
  return (
    <div className={s.display}>
      {error && <Error error={error} />}
      {users && <UserList users={users} />}
    </div>
  );
}
