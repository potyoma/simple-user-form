import { User } from "../models/user";
import data from "./users.json";

export function getUsers(params: { email: string; number?: string }) {
  const { email, number } = params;

  const users = (data as User[]).filter(user => {
    return user.email === email && (!number || user.number.startsWith(number));
  });

  return users;
}
