<template>
  <div class="container">
    <div class="welcome-view">
      <h1>Willkommen bei Wordle!</h1>
      <p>Wordle ist ein Spiel wo man ein Wort erraten muss, indem man Buchstaben eingibt.</p>
      <p>Gib einfach die Buchstaben ein, die du glaubst im Wort enthalten zu sein.</p>
      <p>Wenn du glaubst du hast das Wort, drück einfach die ENTER Taste.</p>
      <p>Wenn es nicht das gesuchte Wort ist, verlierst du ein Leben.</p>
      <p>Du hast 7 Versuche.</p>
      <p>Viel Glück!</p>
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