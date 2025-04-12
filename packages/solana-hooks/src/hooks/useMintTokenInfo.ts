import { useQuery } from "@tanstack/react-query";
import { useSolanaHooksContext } from "../provider";
import {
  getMint,
  TOKEN_2022_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { isValidSolanaAddress } from "../utils/isValidSolanaAddress";

export const createMintTokenQueryKey = ({
  mintToken,
}: {
  mintToken: string | PublicKey;
}) => [
  "mintTokenInfo",
  typeof mintToken === "string" ? mintToken : mintToken.toBase58(),
];

export const useMintTokenInfo = ({
  mintToken,
  programId = TOKEN_PROGRAM_ID,
}: {
  mintToken: string | PublicKey;
  programId?: PublicKey;
}) => {
  const { connection } = useSolanaHooksContext();
  return useQuery({
    queryKey: createMintTokenQueryKey({ mintToken }),
    queryFn: async () => {
      if (!connection) throw Error("Connection is not defined");

      return getMint(
        connection,
        new PublicKey(mintToken),
        "confirmed",
        programId
      );
    },
    enabled:
      !!mintToken &&
      !!connection &&
      isValidSolanaAddress({ address: mintToken }),
  });
};
