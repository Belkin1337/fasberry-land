import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, {
    cache: "no-cache",
  }).then((res) => res.json());

interface GetStatusProps {
  port: string;
}

export function useGetStatus({ port }: GetStatusProps) {
  const { data, mutate, isLoading } = useSWR(
    `https://api.mcstatus.io/v2/status/java/play.fasberry.ru:${port}?timeout=2`,
    fetcher,
    {
      refreshInterval: 2000,
    }
  );

  return {
    data,
    mutate,
    isLoading,
  };
}
