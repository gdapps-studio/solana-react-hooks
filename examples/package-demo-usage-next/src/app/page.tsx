"use client";

import { SolanaHooksProvider, useBalance } from "@gio-shara/solana-hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Connection } from "@solana/web3.js";

const ShowBalance = () => {
  const { data: balance, error } = useBalance({
    address: "7cbGX6WKXakVrDLpGWM4b9M29YbUqToEcyWu3VitmZQS",
  });
  console.log("balance", balance);
  return <div>Balance {balance}</div>;
};

const queryClient = new QueryClient();
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <SolanaHooksProvider
        config={{
          connection,
        }}
      >
        <ShowBalance />
      </SolanaHooksProvider>
    </QueryClientProvider>
  );
}
