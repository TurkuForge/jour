import {
  GOOGLE_EXPIRATION_STORAGE_KEY,
  GOOGLE_USER_STORAGE_KEY,
} from "@/constants";

export const useSystemRest = () => {
  localStorage.removeItem(GOOGLE_EXPIRATION_STORAGE_KEY);
  localStorage.removeItem(GOOGLE_USER_STORAGE_KEY);

  location.reload();
};
