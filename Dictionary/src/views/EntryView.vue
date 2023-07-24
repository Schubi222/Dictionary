<template>
  <div class="Entry">

    <input type="text" @keyup.enter="error_check_before_query" id="search" placeholder="Search" v-model="searchTerm" ref="input">

    <div class="Content" v-if="queried_data && queried_data.title !== 'No Definitions Found'">

      <div class="Pronunciation">
        <div class="word">{{ queried_data[0].word}}</div>
        <div class="phonetics">{{ queried_data[0].phonetics[0]?.text }}</div>
        <div class="audio"
             v-if="queried_data[0].phonetics[0]?.audio"
             @click="playAudio(queried_data[0].phonetics[0]?.audio)"
        >
          <span>&#9658;</span></div>

      </div>

      <div class="Word-Types" v-for="type in queried_data[0].meanings">
        <div class="word-type">{{ type.partOfSpeech }}</div>

        <div class="Meaning">
          <h4>Meaning</h4>
          <ul>
            <li v-for="definition in type.definitions">{{definition.definition}}</li>
          </ul>
          <div class="Synonyms" v-if="type.synonyms.length">
            <h4>Synonyms: </h4>
            <div v-for="synonym in type.synonyms" @click="synonymQuery">{{synonym}}</div>
          </div>
        </div>
      </div>

      <hr>

      <div class="footer" v-if="queried_data[0].sourceUrls">
        <p>Source:</p>
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
import {onMounted, ref} from "vue";

const props = defineProps(
  ['searchTerm']
)

const searchTerm = ref('')

const queried_data = ref()

const input = ref()

function playAudio(source:string){
  let audio = new Audio(source);
  audio.play();
}

const synonymQuery = (e:any) =>{
  searchTerm.value = e.target.textContent
  error_check_before_query()
}
function error_check_before_query(){
  if(searchTerm.value === ""){
    input.value.classList.add('error')
    input.value.placeholder = "Enter Your Search"
    return
  }
  input.value.classList.remove('error')
  input.value.placeholder = "Search"
  queryData()
}
async function queryData(){
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm.value}`)
  queried_data.value = await response.json()
}

onMounted(() =>{
  if (props.searchTerm){
    searchTerm.value = props.searchTerm
    error_check_before_query()
  }
});
</script>

<style scoped>
@import "@/assets/EntryView.css";
</style>