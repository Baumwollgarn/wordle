<template>
  <div v-on:keyup-enter="guessWord" v-on:keyup.delete="removeLastLetter">
    <div class="game-field">
      <div class="word">
        <div v-for="(row, rowIndex) in matrixGuessed" :key="rowIndex" class="word-row">
          <div v-for="(letter, letterIndex) in row" :key="letterIndex" class="letter-single" :class="{correct: letter.isGuessed && letter.isCorrect, wrong: letter.isGuessed && letter.isWrong, almost: letter.isGuessed && !letter.isCorrect}">
            <LetterBox :letter="letter.letter" :is-entered="letter.isEntered" :is-wrong="letter.isWrong" :is-correct="letter.isCorrect" :is-guessed="letter.isGuessed"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LetterBox from "@/components/LetterBox.vue";

export default {
  name: "GameField",
  components: {LetterBox},
  props: {
    word: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      wordArray: [],
      matrix: [],
      matrixGuessed: [],
      guessAmount: 0,
      guessLimit: 5,
      guessedLetters: [],
      wrongLetters: [],
      message: '',
      actualLine: 0,
      actualLineGuessedLetters: [],
    }
  },
  methods: {
    initializeMatrix() {
      this.wordArray = this.word.toUpperCase().split('')
      for (let i = 0; i < this.guessLimit; i++) {
        this.matrix.push([])
        this.matrixGuessed.push([])
        for (let j = 0; j < this.wordArray.length; j++) {
          this.matrix[i].push({letter: this.wordArray[j], isGuessed: false, isCorrect: false, isWrong: false})
          this.matrixGuessed[i].push({letter: '', isGuessed: false, isCorrect: false, isWrong: false, isEntered: false})
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
        if (this.actualLineGuessedLetters.length !== this.wordArray.length) return
        this.$emit('lettersGuessed', this.actualLineGuessedLetters)
        this.guessWord()
        this.actualLine++
        this.actualLineGuessedLetters = []
        return
      }
      if (letter.length > 1) return
      if (this.actualLineGuessedLetters.length === this.wordArray.length) return
      this.actualLineGuessedLetters.push(letter)
      let row = this.actualLine
      let column = this.actualLineGuessedLetters.length - 1
      this.matrixGuessed[row][column] = {
        letter: letter,
        isGuessed: false,
        isCorrect: false,
        isEntered: true,
        isWrong: false,
      }
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
    guessWord() {
      let guessedWord = this.actualLineGuessedLetters.join('')
      // Check for each letter if the guessed letter is correct and at the correct spot. If it is, change the letter object to isGuessed: true, isCorrect: true.
      // If it is not, change the letter object to isGuessed: true, isWrong: true.
      // If it is in the word but not at the correct spot, change the letter object to isGuessed: true, isCorrect: false.
      for (let i = 0; i < this.wordArray.length; i++) {
        let letter = this.wordArray[i]
        let guessedLetter = this.actualLineGuessedLetters[i]
        if (letter === guessedLetter) {
          this.matrixGuessed[this.actualLine][i] = {
            letter: guessedLetter,
            isGuessed: true,
            isCorrect: true,
            isWrong: false,
            isEntered: true,
          }
        } else if (this.wordArray.includes(guessedLetter)) {
          this.matrixGuessed[this.actualLine][i] = {
            letter: guessedLetter,
            isGuessed: true,
            isCorrect: false,
            isWrong: false,
            isEntered: true,
          }
        } else {
          this.matrixGuessed[this.actualLine][i] = {
            letter: guessedLetter,
            isGuessed: true,
            isCorrect: false,
            isWrong: true,
            isEntered: true,
          }
        }
      }
      if (guessedWord.toUpperCase() === this.word.toUpperCase()) {
        this.message = 'You won!'
        this.$emit('set-description', true)
        document.body.removeEventListener('keyup', this.handleKeyUp)
      }
    },
  },
  mounted() {
    this.initializeMatrix()
    document.body.addEventListener('keyup', this.handleKeyUp)
  }
}
</script>

<style scoped lang="scss">
.word {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 5rem;
  font-weight: 700;
  color: #000;
}

.word-row {
  display: flex;
  width: 100%;
}


</style>