"use client";

import { SolanaHooksProvider } from "@gio-shara/solana-hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Connection } from "@solana/web3.js";
import { ShowBalance } from "./_components/ShowBalance";
import { ShowMintInfo } from "./_components/ShowMintInfo";
import { SmartShowMintInfo } from "./_components/ShowSmartMintInfo";

const queryClient = new QueryClient();

const connection = new Connection(
  process.env.NEXT_PUBLIC_RPC_URL ?? "",
  "confirmed"
);

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <SolanaHooksProvider
        config={{
          connection,
        }}
      >
        <ShowBalance />
        <ShowMintInfo />
        <SmartShowMintInfo />
      </SolanaHooksProvider>
    </QueryClientProvider>
  );
}
