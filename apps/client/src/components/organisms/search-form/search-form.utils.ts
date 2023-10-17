interface MaskValueOptions {
  limit: number;
  chunkSize: number;
  separator: string;
}

export function maskValue(
  value: string | undefined,
  options: MaskValueOptions = { limit: 6, chunkSize: 2, separator: "-" }
) {
  const { limit, chunkSize, separator } = options;

  if (!value) return value;

  const rawValue = [...value.replace(/\D/g, "")];

  if (rawValue.length >= limit)
    return value.slice(0, limit + Math.round(limit / chunkSize - 1));

  const chunked = rawValue.reduce((acc, next, i) => {
    const value = i % chunkSize === 0 ? next : acc.pop() + next;
    acc.push(value);
    return acc;
  }, [] as string[]);

  return chunked.join(separator);
}
