<template>
 <header>
   <Menu/>
 </header>
  <body class="main-content">
    <RouterView/>
  </body>

</template>

<script setup lang="ts">

import Menu from "./components/Menu.vue";
import {RouterView} from "vue-router";
</script>

<style scoped>

</style>
