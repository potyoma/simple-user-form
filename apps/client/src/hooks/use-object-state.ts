import { useReducer } from "react";

const getReducer =
  <T>() =>
  (state: T, update: Partial<T>): T => ({ ...state, ...update });

export function useObjectState<T>(
  initial?: T
): [T, (update: Partial<T>) => void] {
  const [state, dispatch] = useReducer(getReducer<T>(), initial ?? ({} as T));

  const set = (update: Partial<T>) => dispatch(update);

  return [state, set];
}
