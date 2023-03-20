<script setup>
import GameField from "@/components/GameField.vue";
</script>

<template>
  <main>
    <div class="game-field">
      <GameField/>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.game-field {
  width: 50vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #282828;
}
</style>