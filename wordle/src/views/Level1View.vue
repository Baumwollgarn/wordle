<template>
  <div class="game">
    <div class="game-field">
      <div v-if="word">
        <h1 class="title"> Easy - Level 1 </h1>
        <GameField :word="word"
                   @set-description="descriptionVisible = true"
                   @set-cheat="cheatDescVisible = true"
                   :hint="hint"/>
      </div>
    </div>
    <div class="description">
      <div v-if="descriptionVisible || cheatDescVisible">
        <Description :description="description"
                     :is-visible="descriptionVisible"
                     :word="word" :image="image"
                     :cheat-desc-visible="cheatDescVisible"
                     :cheated-description="cheatedDescription"/>
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
  props: {
    hint: Boolean,
  },
  data() {
    return {
      word: '',
      description: '',
      image: '',
      words: [],
      descriptionVisible: false,
      cheatDescVisible: false,
      cheatedDescription: 'Du hast mich gefunden! Dein Osterei ist 12a50eee10e5c7ec02c4dfac4ad519be',
    }
  },
  methods: {
    async fetchWords() {
      let response = await fetch(`${url}/words/level/1`)
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


footer {
  height: 25vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.game-field {
  width: 50vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.description {
  width: 20vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}


</style>