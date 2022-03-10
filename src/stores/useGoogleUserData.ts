import { GOOGLE_USER_STORAGE_KEY } from "@/constants";

export const useGoogleUserData = (): {
  firstname: string;
  lastname: string;
  profile: string;
} => {
  return JSON.parse(localStorage.getItem(GOOGLE_USER_STORAGE_KEY) || "{}");
};
