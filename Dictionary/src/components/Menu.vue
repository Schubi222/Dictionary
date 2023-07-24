<template>
  <div class="Menu">
    <router-link class="Menu__left" to="/">
      <img src="/public/book.svg" alt="Home">
    </router-link>
    <div class="Menu__right">
      <select name="font" id="font">
        <option value="serif">Serif</option>
        <option value="sans_serif">Sans Serif</option>
        <option value="monospace">Monospace</option>
      </select>
      <div class="color-mode">
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
        <img src="/moon.svg" alt="dark/light mode">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  @import "@/assets/Menu.css";
  @import "@/assets/RoundSlider.css";
</style>