<template>
  <div class="letter-single" @click="guessLetter" :class="{visible: isEntered ,correct: isGuessed && isCorrect, wrong: isGuessed && isWrong, almost: isGuessed && !isCorrect}">
    {{letter}}
  </div>
</template>

<script>
export default {
  name: "Letter",
  props: {
    letter: {
      type: String,
      default: () => 'a'
    },
    isEntered: {
      type: Boolean,
      default: () => false
    },
    isGuessed: {
      type: Boolean,
      default: () => false
    },
    isCorrect: {
      type: Boolean,
      default: () => false
    },
    isWrong: {
      type: Boolean,
      default: () => false
    },
  },
  methods: {
    guessLetter() {
      this.$emit('guessLetter', this.letter)
    }
  }
}
</script>

<style scoped>

.letter-single:hover {
  filter: brightness(1.2);
}

.wrong {
  background: #e74c3c;
  color: white;
}

.almost {
  background: #fad53d;
  color: white;
}

.correct {
  background: #2ecc71;
  color: white;
}

.visible {
  visibility: visible;
}

</style>