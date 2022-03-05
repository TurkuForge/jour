<script setup lang="ts">
import GoogleLoginButton from "@/components/GoogleLoginButton.vue";
import InfoSection from "@/components/InfoSection.vue";
</script>
<template>
  <main class="lg:absolute w-full h-full flex items-center">
    <div class="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
      <div class="lg:flex lg:items-center">
        <div class="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
          <div class="flex">
            <div class="mr-4 flex-shrink-0 flex items-center justify-center">
              <img
                alt="Jour logo"
                src="@/assets/logo.svg"
                width="125"
                height="125"
              />
            </div>
            <div class="flex flex-col space-y-5 px-10">
              <h4 class="text-primary text-5xl">Welcome!</h4>
              <p class="mt-1 text-lg">
                Are you ready to log your time better than ever before?
              </p>
              <GoogleLoginButton />
            </div>
          </div>
        </div>
      </div>
      <div class="py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
        <div class="max-w-lg mx-auto lg:mx-0">
          <h2
            class="text-base font-semibold tracking-wide text-primary uppercase"
          >
            Full-featured
          </h2>
          <p class="mt-2 text-2xl font-extrabold sm:text-3xl">
            Everything you need to manage your work time
          </p>
          <dl class="mt-12 space-y-10">
            <InfoSection title="Easy">
              <template v-slot:icon>
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </template>
              No more 3 mile long Excel files, just your latest times added,
              simple, easy and readable.
            </InfoSection>

            <InfoSection title="Comments">
              <template v-slot:icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </template>
              You can easaly and quickly add text about what you have done. Like
              a diary but better.
            </InfoSection>

            <InfoSection title="History">
              <template v-slot:icon>
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </template>
              Maintain a history of your time and what you have done. No more
              checking slack and filering on specific dates. Everything is here
              and at your disposal.
            </InfoSection>

            <InfoSection title="Teams">
              <template v-slot:icon>
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </template>
              Lett your team know when you are on holiday, No more checking
              three different systems to see if some one has the day off.
            </InfoSection>
          </dl>
        </div>
      </div>
    </div>
  </main>
</template>
