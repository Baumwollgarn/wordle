<template>
  <main>
    <div class="word-list">
      <router-link to="/">Home</router-link>
      <router-link to="/level/1">Level 1 (3-4 letters)</router-link>
      <router-link to="/level/2">Level 2 (5-6 letters)</router-link>
      <router-link to="/level/3">Level 3 (7+ letters)</router-link>
    </div>
    <div class="game-field">
      <h1 class="title"> Easy - Level 1 </h1>
      <div v-if="word">
        <GameField :word="word" @set-description="descriptionVisible = true"/>
      </div>
    </div>
    <div class="description">
      <div v-if="descriptionVisible">
        <Description :description="description" :is-visible="descriptionVisible" :word="word" :image="image"/>
      </div>
    </div>
  </main>
</template>

<script>

import WordList from "@/components/WordList.vue";
import GameField from "@/components/GameField.vue";
import Description from "@/components/Description.vue";

export default{
  components: {Description, GameField, WordList},
  data() {
    return {
      word: '',
      description: '',
      image: '',
      words: [],
      descriptionVisible: false,
    }
  },
  methods: {
    async fetchWords() {
      let response = await fetch('http://localhost:8000/words')
      this.words = await response.json()
    }
  },
  async mounted() {
    await this.fetchWords()
    do {
    let randomNumber = Math.floor(Math.random() * this.words.length)
    this.word = this.words[randomNumber].word.toUpperCase()
    this.description = this.words[randomNumber].description
    this.image = this.words[randomNumber].image
    } while (this.word.length > 4)
  }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.game-field {
  width: 50vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.word-list, .description {
  width: 25vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.title {
  color: rgb(90,197,250);
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 20px;
}
</style>