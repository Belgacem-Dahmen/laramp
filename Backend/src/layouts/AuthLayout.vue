<template>
  <div>
    <Header />
    <div >
      <!-- <Sidebar /> -->
      <router-view> </router-view>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
</script>
