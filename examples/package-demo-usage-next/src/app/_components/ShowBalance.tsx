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
