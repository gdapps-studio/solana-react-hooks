import { useQuery } from "@tanstack/react-query";
import { useSolanaHooksContext } from "../provider";
import { Commitment, GetLatestBlockhashConfig } from "@solana/web3.js";

export const createLatestBlockhashQueryKey = () => ["latestBlockhash"];

export const useLatestBlockhash = ({
  commitmentOrConfig = "confirmed",
}: {
  commitmentOrConfig?: Commitment | GetLatestBlockhashConfig;
}) => {
  const { connection } = useSolanaHooksContext();
  return useQuery({
    queryKey: createLatestBlockhashQueryKey(),
    queryFn: async () => {
      if (!connection) throw Error("Connection is not defined");
      return connection.getLatestBlockhash(commitmentOrConfig);
    },
    enabled: !!connection,
  });
};
