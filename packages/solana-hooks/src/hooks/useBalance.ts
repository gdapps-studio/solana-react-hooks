import { PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";
import { useSolanaHooksContext } from "../provider";
import { isValidSolanaAddress } from "../utils/isValidSolanaAddress";

export const createBalanceQueryKey = ({
  address,
}: {
  address: string | PublicKey;
}) => ["balance", typeof address === "string" ? address : address.toBase58()];

export const useBalance = ({ address }: { address: string | PublicKey }) => {
  const { connection } = useSolanaHooksContext();
  return useQuery({
    queryKey: createBalanceQueryKey({ address }),
    queryFn: () => {
      if (!connection) throw Error("Connection is not defined");
      return connection.getBalance(new PublicKey(address));
    },
    enabled: !!address && !!connection && isValidSolanaAddress({ address }),
  });
};
