<template>
  <div v-on:keyup-enter="guessWord" v-on:keyup.delete="removeLastLetter">
    <div>{{actualLineGuessedLetters}}</div>
    <div class="game-field">
      <div class="word">
        <div v-for="(row, rowIndex) in matrixGuessed" :key="rowIndex" class="word-row">
          <span style="font-size:6px"> {{row}}</span>
          <div v-for="(letter, letterIndex) in row" :key="letterIndex" class="letter-single" :class="{correct: letter.isGuessed && letter.isCorrect, wrong: letter.isGuessed && letter.isWrong, almost: letter.isGuessed && !letter.isCorrect}">
            <LetterBox :letter="letter.letter" :is-entered="letter.isEntered"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LetterBox from "@/components/LetterBox.vue";

let word = 'SPRING'
let wordArray = word.split('')
export default {
  name: "GameField",
  components: {LetterBox},
  data() {
    return {
      word,
      wordArray,
      matrix: [],
      matrixGuessed: new Array(7).fill(new Array(wordArray.length).fill({letter: '', isGuessed: false, isCorrect: false, isWrong: false})),
      guessAmount: 0,
      guessLimit: 7,
      guessedLetters: [],
      wrongLetters: [],
      message: '',
      actualLine: 0,
      actualLineGuessedLetters: [],
    }
  },
  methods: {
    initializeMatrix() {
      for (let i = 0; i < this.guessLimit; i++) {
        this.matrix.push([])
        for (let j = 0; j < this.wordArray.length; j++) {
          this.matrix[i].push({letter: this.wordArray[j], isGuessed: false, isCorrect: false, isWrong: false})
        }
      }
    },
    handleKeyUp(event) {
      let letter = event.key.toUpperCase();
      if (letter === 'BACKSPACE') {
        this.removeLastLetter()
        return
      }
      if (letter === 'ENTER') {
        this.actualLine++
        this.actualLineGuessedLetters = []
        return
      }
      if (letter.length > 1) return
      if (this.actualLineGuessedLetters.length === this.wordArray.length) return
      this.actualLineGuessedLetters.push(letter)
      let row = this.actualLine
      let column = this.actualLineGuessedLetters.length - 1
      console.log(row, column)
      this.matrixGuessed[row][column] = {
        letter: letter,
        isGuessed: false,
        isCorrect: false,
        isEntered: true,
        isWrong: false,
      }
      console.log(this.matrixGuessed)
    },
    removeLastLetter() {
      this.actualLineGuessedLetters.pop()
      this.matrixGuessed[this.actualLine][this.actualLineGuessedLetters.length] = {
        letter: '',
        isGuessed: false,
        isCorrect: false,
        isWrong: false,
        isEntered: false,
      }
    },
  },
  mounted() {
    this.initializeMatrix()

    document.body.addEventListener('keyup', this.handleKeyUp)
  }
}
</script>

<style scoped>
.word {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 5rem;
  font-weight: 700;
  color: #2ecc71;
}

.word-row {
  display: flex;
  width: 100%;
}
</style>