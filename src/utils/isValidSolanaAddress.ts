import { PublicKey } from "@solana/web3.js";

export const isValidSolanaAddress = ({
  address,
}: {
  address: string | PublicKey;
}) => {
  try {
    return PublicKey.isOnCurve(new PublicKey(address).toBuffer());
  } catch (e) {
    return false;
  }
};
