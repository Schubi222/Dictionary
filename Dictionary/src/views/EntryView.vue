<template>
  <div class="Entry">

    <input type="text" @keyup.enter="queryData" id="search" placeholder="Search" v-model="searchTerm">

    <div class="Content" v-if="queried_data && queried_data.title !== 'No Definitions Found'">

      <div class="Pronunciation">
        <div class="word">{{ queried_data[0].word}}</div>
        <div class="audio" v-if="queried_data[0].phonetics[0]?.audio">{{ queried_data[0].phonetics[0]?.audio}}</div>
        <div class="phonetics">{{ queried_data[0].phonetics[0]?.text }}</div>
      </div>

      <div class="Word-Types" v-for="type in queried_data[0].meanings">
        <div class="word-type">{{ type.partOfSpeech }}</div>

        <div class="Meaning">
          <h4>Meaning</h4>
          <ul>
            <li v-for="definition in type.definitions">{{definition.definition}}</li>
          </ul>
          <div class="Synonyms" v-if="type.synonyms.length">
            <h4>Synonyms</h4>
            <div v-for="synonym in type.synonyms" @click="synonymQuery">{{synonym}}</div>
          </div>
        </div>
      </div>

      <hr>

      <div class="footer" v-if="queried_data[0].sourceUrls">
        <p>Source</p>
        <a v-for="source in queried_data[0].sourceUrls" :href="source">{{source}}</a>
      </div>

    </div>
    <div v-else-if="queried_data && queried_data.title == 'No Definitions Found'" class="No-Result">
      <h2>{{queried_data.title}}</h2>
      <h3>{{queried_data.message}}</h3>
      <h3>{{queried_data.resolution}}</h3>
    </div>
  </div>

</template>

<script setup lang="ts">
import {Ref, ref} from "vue";

const props = defineProps({search_term_passed:String})

const searchTerm = ref('')

const queried_data: Ref<JSON> = ref()

const synonymQuery = (e) =>{
  searchTerm.value = e.target.textContent
  console.log(searchTerm.value)
  console.log(e.target)
  queryData()
}
async function queryData(){
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm.value}`)
  queried_data.value = await response.json()
}

</script>

<style scoped>
@import "@/assets/EntryView.css";
</style>