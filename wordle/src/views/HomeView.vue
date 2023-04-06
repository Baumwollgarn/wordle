<template>
  <main>
    <div class="word-list">
      <router-link to="/">Home</router-link>
      <router-link :to="{name: 'level1'}">Level 1 (1 Punkt)</router-link>
      <router-link :to="{name: 'level2'}">Level 2 (2 Punkte)</router-link>
      <router-link :to="{name: 'level3'}">Level 3 (3 Punkte)</router-link>
    </div>
    <div class="game-field">
      <RouterView :hint="hint"/>
    </div>
  </main>
  <footer class="footer-container">
    <div class="footer">
      <font-awesome-icon :icon="['fas', 'rotate-right']" />
    </div>
    <div class="footer hint">
      <font-awesome-icon :icon="['fas', 'lightbulb']" />
    </div>
  </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faRotateRight} from "@fortawesome/free-solid-svg-icons/faRotateRight";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons/faLightbulb";

library.add(faRotateRight)
library.add(faLightbulb)
let url = import.meta.env.VITE_APP_WORD_URL
export default{
  components: {FontAwesomeIcon},
  data() {
    return {
      word: '',
      description: '',
      image: '',
      words: [],
      descriptionVisible: false,
      hint: false,
    }
  },
  methods: {
    async fetchWords() {
      let response = await fetch(url + '/words')
      this.words = await response.json()
    },
    restartGame() {
      this.$router.go()
    },
  },
  async mounted() {
    await this.fetchWords()
    let randomNumber = Math.floor(Math.random() * this.words.length)
    this.word = this.words[randomNumber].word.toUpperCase()
    this.description = this.words[randomNumber].description
    this.image = this.words[randomNumber].image

    document.querySelector('.footer').addEventListener('click', this.restartGame)
    document.querySelector('.hint').addEventListener('click', () => {
      if (this.hint) {
        this.hint = false
        document.querySelector('.hint').style.color = 'rgba(80,80,80,0.7)'
        document.querySelector('.hint').style.backgroundColor = 'rgba(255,255,255,1)'
      } else {
        this.hint = true
        document.querySelector('.hint').style.color = 'rgba(80,80,80,1)'
        document.querySelector('.hint').style.backgroundColor = 'rgba(180,240,180,1)'
      }
    })
  },
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

.footer-container{
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 15vh;
}

.footer {
  text-align: center;
  margin-top: 150px;
  border: 2px solid rgb(180,180,180);
  width: 75px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;


  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: rgba(80,80,80,0.7)
}
</style>