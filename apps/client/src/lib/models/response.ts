import type { Error } from "./error";

export interface Response<T> {
  error?: Error;
  isOk: boolean;
  data?: T;
}
