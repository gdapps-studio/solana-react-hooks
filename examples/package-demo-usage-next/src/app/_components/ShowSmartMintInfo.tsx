import { useSmartMintTokenInfo } from "@gio-shara/solana-hooks";
import { formatLamports } from "@gio-shara/solana-hooks/utils";

const USDC_MINT_TOKEN = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";

export const SmartShowMintInfo = () => {
  const { data: smartMintInfo, isLoading: isMintInfoPending } =
    useSmartMintTokenInfo({
      mintToken: USDC_MINT_TOKEN,
    });

  return (
    <div>
      <h2 className="text-lg font-bold">Smart Mint Info</h2>
      {!isMintInfoPending && smartMintInfo ? (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span>Decimals: </span>
            <span>{smartMintInfo.decimals}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Address: </span>
            <span>{smartMintInfo.address.toBase58()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Supply: </span>
            <span>{formatLamports(Number(smartMintInfo.supply))}</span>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
