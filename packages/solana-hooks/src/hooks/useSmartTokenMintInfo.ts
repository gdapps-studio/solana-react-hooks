import { useQuery } from "@tanstack/react-query";
import { useSolanaHooksContext } from "../provider";
import {
  getMint,
  TOKEN_2022_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { useAccountInfo } from "./useAccountInfo";

const KEY_PREFIX = "smartMintTokenInfo";

export const createSmartMintTokenQueryKey = ({
  mintToken,
}: {
  mintToken: string | PublicKey;
}) => [KEY_PREFIX, new PublicKey(mintToken).toBase58()];

export type SPLTokenStandard = "spl" | "spl-2022";

export const useSmartMintTokenInfo = ({
  mintToken,
}: {
  mintToken: string | PublicKey;
}) => {
  const { connection } = useSolanaHooksContext();
  const { data: mintAccount } = useAccountInfo({
    account: mintToken,
  });
  return useQuery({
    queryKey: createSmartMintTokenQueryKey({ mintToken }),
    queryFn: async () => {
      if (!connection) throw Error("Connection is not defined");
      return getMint(
        connection,
        new PublicKey(mintToken),
        "confirmed",
        mintAccount?.owner?.equals(TOKEN_PROGRAM_ID)
          ? TOKEN_PROGRAM_ID
          : TOKEN_2022_PROGRAM_ID
      );
    },
    enabled: !!mintToken && !!connection,
  });
};
