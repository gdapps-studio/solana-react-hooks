export const defaultFetcher = async <T>(
  url: string,
  options: Record<string, string | object> = {}
) => {
  const response = await fetch(url, {
    ...options,
  });
  if (!response.ok) throw new Error("Network response was not ok");
  return (await response.json()) as T;
};
