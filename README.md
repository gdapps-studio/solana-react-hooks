# @gio-shara/solana-hooks

A collection of useful React hooks for Solana development, built with `@solana/web3.js` and `@tanstack/react-query`. This package provides a set of commonly used hooks for Solana React projects, making it easier to interact with the Solana blockchain.

## Features

- 🚀 Built with TypeScript for better type safety
- ⚡️ Powered by `@tanstack/react-query` for efficient data fetching and caching
- 🔌 Seamless integration with `@solana/web3.js`
- 📦 Lightweight and easy to use
- 🧩 Modular hooks for different Solana functionalities

## Installation

```bash
pnpm add @gio-shara/solana-hooks
# or
npm install @gio-shara/solana-hooks
# or
yarn add @gio-shara/solana-hooks
```

## Available Hooks

- `useConnection` - Hook for managing Solana connection
- `useBalance` - Hook for fetching account balance
- `useMintTokenInfo` - Hook for fetching token mint information
- `useLatestBlockhash` - Hook for getting the latest blockhash
- `useSmartMintTokenInfo` - Smartly checks the deployed mint token program and handles accordingly

## Available Utils
- `formatLamports` - Converts lamports values to SOL
- `isValidSolanaAddress` - Checks the validity of a Solana address
- `truncateAddress` - Shortens addresses based on the passed length

## Peer Dependencies

This package requires the following peer dependencies:

- `@solana/web3.js` (^1.98.0)
- `@solana/spl-token` (^0.4.13)
- `@tanstack/react-query` (^5.72.2)
- `react` (^19.1.0)

## Provider Setup

Before using the hooks, you need to wrap your application with the required providers. Here's how to set it up:

```tsx
import { Connection } from "@solana/web3.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SolanaHooksProvider } from "@gio-shara/solana-hooks";

// Create a QueryClient instance
const queryClient = new QueryClient();

// Create a Solana connection
const connection = new Connection("https://api.mainnet-beta.solana.com");

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SolanaHooksProvider config={{ connection }}>
        {/* Your app components */}
      </SolanaHooksProvider>
    </QueryClientProvider>
  );
}
```

## Usage

```tsx
import { formatLamports } from "@gio-shara/solana-hooks/utils";
import { useBalance } from "@gio-shara/solana-hooks";

export const ShowBalance = () => {
  const { data: balance = 0, isLoading: isBalanceLoading } = useBalance({
    address: "7cbGX6WKXakVrDLpGWM4b9M29YbUqToEcyWu3VitmZQS",
  });
  
  const formattedBalance = formatLamports(balance);
  return <div>
          <h2 className="text-lg font-bold">Show Balance</h2>
    {!isBalanceLoading ? `Balance: ${formattedBalance}`: "Loading..."}</div>;
};

```

## Requirements

- Node.js >= 18.0.0
- React >= 19.1.0

## License

MIT © [Giorgi Sharashenidze](https://www.gdapps.studio/)

## Author

Giorgi Sharashenidze - [@gio-shara](https://www.gdapps.studio/)
