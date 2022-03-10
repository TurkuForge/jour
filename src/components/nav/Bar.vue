<script setup lang="ts">
import { useSystemRest } from "@/stores/useSystemRest";
import { ref } from "vue";
import { useGoogleUserData } from "@/stores/useGoogleUserData";
const showDropDown = ref(false);

const { profile } = useGoogleUserData();
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-secondary border-b-2 border-third">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block h-12 w-auto"
              src="@/assets/logo.svg"
              alt="Workflow"
            />
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <button
              type="button"
              class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
            >
              <!-- Heroicon name: solid/plus-sm -->
              <svg
                class="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Add New Time</span>
            </button>
          </div>
          <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  type="button"
                  class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  @click="showDropDown = !showDropDown"
                >
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" :src="profile" alt="" />
                </button>
              </div>
              <div
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
                v-show="showDropDown"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                  @click="useSystemRest"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
