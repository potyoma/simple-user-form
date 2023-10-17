export function useCancelRequest(loading: boolean) {
  const controller = new AbortController();

  const cancel = () => loading && controller.abort();

  return { signal: controller.signal, cancel };
}
