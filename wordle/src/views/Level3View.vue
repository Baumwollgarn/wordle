<template>
  <div class="game">
    <div class="game-field">
      <div v-if="word">
        <h1 class="title"> Difficult - Level 3 </h1>
        <GameField :word="word" @set-description="descriptionVisible = true"/>
      </div>
    </div>
    <div class="description">
      <div v-if="descriptionVisible">
        <Description :description="description" :is-visible="descriptionVisible" :word="word" :image="image"/>
      </div>
    </div>
  </div>
</template>

<script>
let url = import.meta.env.VITE_APP_WORD_URL
import WordList from "@/components/WordList.vue";
import GameField from "@/components/GameField.vue";
import Description from "@/components/Description.vue";

export default{
  components: {Description, GameField, WordList},
  data() {
    return {
      word: '',
      description: '',
      words: [],
      image: '',
      descriptionVisible: false,
    }
  },
  methods: {
    async fetchWords() {
      let response = await fetch(`${url}/words/level/3`)
      this.words = await response.json()
    }
  },
  async mounted() {
    await this.fetchWords()
    this.word = this.words.word
    this.description = this.words.description
    this.image = this.words.image
  }
}
</script>

<style scoped>

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

</style>