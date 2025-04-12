export const truncateAddress = (address: string, length = 4) =>
  `${address.slice(0, length)}...${address.slice(-length)}`;
