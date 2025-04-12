import { useMintTokenInfo } from "@gio-shara/solana-hooks";
import { formatLamports } from "@gio-shara/solana-hooks/utils";

const USDC_MINT_TOKEN = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";

export const ShowMintInfo = () => {
  const { data: mintInfo, isLoading: isMintInfoPending } = useMintTokenInfo({
    mintToken: USDC_MINT_TOKEN,
  });

  return (
    <div>
      <h2 className="text-lg font-bold">Mint Info</h2>
      {!isMintInfoPending && mintInfo ? (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span>Decimals: </span>
            <span>{mintInfo.decimals}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Address: </span>
            <span>{mintInfo.address.toBase58()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Supply: </span>
            <span>{formatLamports(Number(mintInfo.supply))}</span>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
