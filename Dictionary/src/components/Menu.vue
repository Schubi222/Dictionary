<template>
  <div class="Menu">
    <router-link class="Menu__left" to="/">
      <img src="/book.svg" alt="Home">
    </router-link>
    <div class="Menu__right">
      <select name="font" id="font" v-model="active_font" @change="setFont">
        <option value="serif">Serif</option>
        <option value="sans-serif">Sans Serif</option>
        <option value="monospace">Monospace</option>
      </select>
      <div class="color-mode">
        <label class="switch">
          <input type="checkbox" @click="setTheme">
          <span class="slider round"></span>
        </label>
        <img src="/moon.svg" alt="dark/light mode">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  import {ref} from "vue";

  let active_font = ref("serif")
  const setTheme = () => {
    document.documentElement.classList.toggle('light')
  }

  const setFont = () =>{
    document.documentElement.style.fontFamily = active_font.value
  }
</script>

<style scoped>
  @import "@/assets/Menu.css";
  @import "@/assets/RoundSlider.css";
</style>