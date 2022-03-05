<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>
<template>
  <div class="relative">
    <dt>
      <div
        class="absolute h-12 w-12 flex items-center justify-center border rounded-md"
      >
        <slot name="icon" />
      </div>
      <p class="ml-16 text-lg leading-6 font-medium">{{ title }}</p>
    </dt>
    <dd class="mt-2 ml-16 text-base text-gray-500">
      <slot />
    </dd>
  </div>
</template>
