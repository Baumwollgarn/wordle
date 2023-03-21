<template>
  <div class="container">
    <div class="welcome-view">
      <h1>Welcome to Wordle</h1>
      <p>Wordle is a game where you have to guess a word by guessing letters.</p>
      <p>Guess the word by entering letters in the boxes below.</p>
      <p>When you think you know the word, press enter.</p>
      <p>If you guess wrong, you lose a life.</p>
      <p>You have 5 lives.</p>
      <p>Good luck!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeView"
}
</script>

<style scoped>
.container {
  width: 50vw;
}
.welcome-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: center;
  height: 100%;
}
</style>