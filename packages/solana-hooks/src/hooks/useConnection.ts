import { useSolanaHooksContext } from "../provider";

export const useConnection = () => {
  const { connection } = useSolanaHooksContext();
  return connection;
};
