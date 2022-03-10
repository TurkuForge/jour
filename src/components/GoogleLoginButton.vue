<script setup lang="ts">
import { decodeJwt } from "jose";
import { ref, onMounted } from "vue";
import {
  GOOGLE_EXPIRATION_STORAGE_KEY,
  GOOGLE_USER_STORAGE_KEY,
} from "@/constants";

const buttonDiv = ref<HTMLElement | null>(null);

const { google } = window;

onMounted(() => {
  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
    callback(credentialResponse) {
      const { exp, family_name, given_name, picture } = decodeJwt(
        credentialResponse.credential
      );
      localStorage.setItem(
        GOOGLE_EXPIRATION_STORAGE_KEY,
        `${Date.now() + (exp || 0)}`
      );
      localStorage.setItem(
        GOOGLE_USER_STORAGE_KEY,
        JSON.stringify({
          lastname: family_name,
          firstname: given_name,
          profile: picture,
        })
      );

      location.reload();
    },
  });

  if (buttonDiv.value) {
    google.accounts.id.renderButton(
      buttonDiv.value,
      { theme: "outline", size: "large" } // customization attributes
    );
  }
});
</script>

<template>
  <div ref="buttonDiv" />
</template>
