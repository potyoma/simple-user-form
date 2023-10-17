import type { User, Error as ErrorModel, Response } from "../models";

export async function getUsers(
  email: string,
  phone?: string,
  signal?: AbortSignal
): Promise<Response<User[]> | undefined> {
  try {
    const url = `/api/users?email=${email}&number=${phone ?? ""}`;
    const resp = await fetch(url, { signal });
    const json = await resp.json();

    if (resp.status === 400) throw "Wrong filters";

    const users = json as User[];

    if (users.length < 1) throw "No users found";

    return { data: users, isOk: true };
  } catch (err) {
    if ((err as Error)?.name === "AbortError") return;

    const error = {
      heading: "Something went wrong",
      message: err?.toString(),
    } as ErrorModel;
    return { error, isOk: false };
  }
}
