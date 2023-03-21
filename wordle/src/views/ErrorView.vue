<template>
  <div class="error-view">
    <h1>404</h1>
    <h2>Page not found</h2>
  </div>
</template>

<script>
export default {
  name: "ErrorView"
}
</script>

<style scoped>
.error-view {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
}
</style>