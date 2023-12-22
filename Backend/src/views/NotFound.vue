<template>
  <div class="w-full h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <p class="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">
        Page Not Found
      </p>
      <p class="md:text-lg lg:text-xl text-gray-600 mt-8">
        Sorry, the page you are looking for could not be found.
      </p>
    </div>
    <div>
      <button
        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 mt-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <router-link :to="{ name: 'Dashboard' }">Go back Home </router-link>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
