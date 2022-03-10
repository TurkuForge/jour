<script setup lang="ts">
import "@/assets/index.css";

import { RouterView } from "vue-router";
import { useTokenExpirationTime } from "@/stores/useTokenExpirationTime";
import { useSystemRest } from "@/stores/useSystemRest";

const { isValid, empty } = useTokenExpirationTime();
if (!isValid && !empty) {
  useSystemRest();
}
</script>

<template>
  <RouterView />
</template>
