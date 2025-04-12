import { useQuery } from "@tanstack/react-query";
import { useSolanaHooksContext } from "../provider";
import { PublicKey } from "@solana/web3.js";

const KEY_PREFIX = "accountInfo";

export const createAccountInfoQueryKey = ({
  account,
}: {
  account: string | PublicKey;
}) => [KEY_PREFIX, new PublicKey(account).toBase58()];

export const useAccountInfo = ({
  account,
}: {
  account: string | PublicKey;
}) => {
  const { connection } = useSolanaHooksContext();
  const accountPubkey = new PublicKey(account);
  return useQuery({
    queryKey: createAccountInfoQueryKey({ account: accountPubkey }),
    queryFn: async () => {
      if (!connection) throw Error("Connection is not defined");
      return connection.getAccountInfo(accountPubkey);
    },
    enabled: !!connection && !!account,
  });
};
