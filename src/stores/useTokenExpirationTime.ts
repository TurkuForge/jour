import { GOOGLE_EXPIRATION_STORAGE_KEY } from "@/constants";

export const useTokenExpirationTime = () => {
  const rawStorageValue = localStorage.getItem(GOOGLE_EXPIRATION_STORAGE_KEY);
  const tokenExpirationTime = parseInt(rawStorageValue || "0");

  return {
    isValid: Date.now() < tokenExpirationTime,
    empty: !rawStorageValue,
  };
};
