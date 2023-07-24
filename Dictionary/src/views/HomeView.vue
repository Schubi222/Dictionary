<template>
  <div class="Home">
    <label for="search">Enter your search</label>
    <input type="text" @keydown.enter="search"
           id="search" placeholder="Search" v-model="searchTerm" ref="input">
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  import router from "../router";

  const searchTerm = ref('')
  const input = ref()
  function search(){
    if (searchTerm.value)
    {
      router.push({name:'search-searchTerm', params:{'searchTerm':searchTerm.value}})
    }
    else{
      input.value.placeholder="Enter Your Search"
      input.value.classList.add('error')
    }
  }
</script>

<style scoped>
 @import "@/assets/HomeView.css";
</style>