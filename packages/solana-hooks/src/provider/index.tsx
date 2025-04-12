import { Connection } from "@solana/web3.js";
import { createContext, ReactNode, useContext } from "react";

type SolanaHooksContextType = {
  connection: Connection | undefined;
};

const SolanaHooksContext = createContext<SolanaHooksContextType>({
  connection: undefined,
});

type Config = {
  connection: Connection;
};

export const SolanaHooksProvider = ({
  config,
  children,
}: {
  config: Config;
  children?: ReactNode;
}) => {
  return (
    <SolanaHooksContext.Provider value={{ connection: config.connection }}>
      {children}
    </SolanaHooksContext.Provider>
  );
};

export const useSolanaHooksContext = () => {
  const context = useContext(SolanaHooksContext);
  if (!context)
    throw new Error("useSolanaHooks must be used within a SolanaHooksProvider");
  return context;
};
