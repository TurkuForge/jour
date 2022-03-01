import { defineStore } from "pinia";

interface GoogleAuthState {
  client: gapi.auth2.GoogleAuth | null;
  isSignedIn: boolean;
  basicProfile: gapi.auth2.BasicProfile | null;
  authResponse: gapi.auth2.AuthResponse | null;
}

export const useGoogleAuth = defineStore({
  id: "googleAuth",
  state: (): GoogleAuthState => ({
    client: null,
    isSignedIn: false,
    basicProfile: null,
    authResponse: null,
  }),
  getters: {},
  actions: {
    async login() {
      gapi.load("client", async () => {
        await gapi.client.init({
          apiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
          clientId: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
          scope: "https://www.googleapis.com/auth/spreadsheets",
        });

        this.client = gapi.auth2.getAuthInstance();
        this.client.signIn().then((googleUser: gapi.auth2.GoogleUser) => {
          this.isSignedIn = true;
          this.basicProfile = googleUser.getBasicProfile();
          this.authResponse = googleUser.getAuthResponse(true);
        });
      });
    },

    async logout() {
      this.client?.signOut();
      this.client?.disconnect();
      this.isSignedIn = false;
    },
  },
});
