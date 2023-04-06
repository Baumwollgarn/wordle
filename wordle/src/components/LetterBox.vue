<template>
  <transition name="turn" @enter="turnLetters">
    <div class="box" :class="{correct: this.isGuessed && this.isCorrect, wrong: this.isWrong, almost: this.isGuessed && !this.isCorrect && !this.isWrong}">
        <span v-if="this.isGuessed || this.isWrong || this.isEntered ">{{letter}}</span>
    </div>
  </transition>
</template>

<script lang="ts">
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
  data() {
    return {
    }
  },
  methods: {
    turnLetters() {
      this.$el.classList.add('turn')
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  width: 50px;
  border: 2px solid rgb(180,180,180);
  border-radius: 5px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  font-weight: 700;
  margin: 5px;
}

.correct {
  color: white;
  animation: turnCorrect ease-in-out forwards 2s;
}

.wrong {
  color: white;
  animation: turnWrong ease-in-out forwards 2s;
}

.almost {
  color: white;
  animation: turnAlmost ease-in-out forwards 2s;
}

/* Animation for the letter box to turn 360 on the Y axis when the letter is guessed */
@keyframes turnCorrect {
  0% {
    background: inherit;
    color: black;
  }
  100% {
    background: #1ec264;
    color: white;
  }
}

@keyframes turnWrong {
  0% {
    background: inherit;
    color: black;

  }
  100% {
    background: grey;
    color: white;
  }
}

@keyframes turnAlmost {
  0% {
    transform: rotateZ(0deg);
    background: inherit;
    color: black;
  }
  50% {
    transform: rotateZ(19deg)
  }
  100% {
    transform: rotateZ(0deg);
    background: #fad53d;
    color: white;
  }
}
</style>