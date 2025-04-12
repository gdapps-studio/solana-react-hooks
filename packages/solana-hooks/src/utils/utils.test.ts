import { expect, test, describe } from "vitest";
import { formatLamports } from "./formatLamports";
import { isValidSolanaAddress } from "./isValidSolanaAddress";
import { PublicKey } from "@solana/web3.js";
import { truncateAddress } from "./truncateAddress";

describe("utils", () => {
  test.for([
    [1234567890, 1.23456789, true],
    [23213, 234, false],
    [23213, 0.000023213, true],
    [0, 0, true],
    [1, 0.1, false],
    [1, 1e-9, true],
  ])("formatLamports", ([input, expected, isValid]) => {
    const formatted = formatLamports(input as number);
    expect(formatted === expected).toBe(isValid);
  });

  test.for([
    ["7cbGX6WKXakVrDLpGWM4b9M29YbUqToEcyWu3VitmZQS", true],
    ["invalid-address", false],
    [11, false],
    ["7cbGX6WKXakVrDLpGWM4b9M29YbUqToEcyWu3Vitm", false],
    [undefined, false],
    [null, false],
    [NaN, false],
    [new PublicKey("7cbGX6WKXakVrDLpGWM4b9M29YbUqToEcyWu3VitmZQS"), true],
  ])("isValidSolanaAddress", ([address, isValid]) => {
    const result = isValidSolanaAddress({
      address: address as string,
    });
    expect(result).toBe(isValid);
  });

  test.for([
    ["7cbGX6WKXakVrDLpGWM4b9M29YbUqToEcyWu3VitmZQS", 4, "7cbG...mZQS", true],
    ["7cbGX6WKXakVrDLpGWM4b9M29YbUqToEcyWu3VitmZQS", 5, "7cbGX...tmZQS", true],
    ["7cbGX6WKXakVrDLpGWM4b9M29YbUqToEcyWu3VitmZQS", 5, "7c...tmZQ", false],
  ])("truncateAddress", ([address, length, expected, isValid]) => {
    const result = truncateAddress(address as string, length as number);
    expect(expected === result).toBe(isValid);
  });
});
