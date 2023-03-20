<template>
  <div class="box" :class="{correct: isGuessed && isCorrect, wrong: isWrong, almost: isGuessed && !isCorrect}">
      <span v-if="isGuessed || isWrong || isEntered ">{{letter}}</span>
  </div>
</template>

<script>
export default {
  name: "LetterBox",
  props: {
    letter: {
      type: String,
      default: () => 'a'
    },
    isEntered: {
      type: Boolean,
      default: () => false
    },
  },
  data() {
    return {
      letter2: this.letter,
      isGuessed: false,
      isCorrect: false,
      isWrong: false,
      isEntered1: this.isEntered
    }
  }

}
</script>

<style scoped>
.box {
  width: 50px;
  border: 1px solid grey;
  border-radius: 5px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 5px;
}

.correct {
  background: #2ecc71;
  color: white;
}

.wrong {
  background: grey;
  color: white;
}

.almost {
  background: #fad53d;
  color: white;
}

</style>