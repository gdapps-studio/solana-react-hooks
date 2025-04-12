import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export const formatLamports = (balance: number) => balance / LAMPORTS_PER_SOL;
