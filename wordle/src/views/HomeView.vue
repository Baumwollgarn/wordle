<template>

  <main>
    <div class="word-list">
      <router-link to="/">Home</router-link>
      <router-link to="/level/1">Level 1 (3-4 letters)</router-link>
      <router-link to="/level/2">Level 2 (5-6 letters)</router-link>
      <router-link to="/level/3">Level 3 (7+ letters)</router-link>
    </div>
    <div class="game-field">
      <RouterView/>
    </div>
  </main>

</template>

<script>
let url = import.meta.env.VITE_APP_WORD_URL
export default{
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
      let response = await fetch(url + '/words')
      this.words = await response.json()
    }
  },
  async mounted() {
    await this.fetchWords()
    let randomNumber = Math.floor(Math.random() * this.words.length)
    this.word = this.words[randomNumber].word.toUpperCase()
    this.description = this.words[randomNumber].description
    this.image = this.words[randomNumber].image
  }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 60vh;
}

.game-field {
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
  position: relative;
  left: 0;
}
</style>