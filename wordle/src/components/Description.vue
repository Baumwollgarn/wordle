<template>
  <div class="container">
    <img :src="image" alt="word" v-if="isVisible" class="image">
    <h2 class="title">{{word}}</h2>
    <p class="description" v-if="isVisible">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: "Description",
  props: {
    word: {
      type: String,
      default: () => 'a'
    },
    description: {
      type: String,
      default: () => 'a'
    },
    image: {
      type: String,
      default: () => 'a'
    },
    isVisible: {
      type: Boolean,
      default: () => false
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.image {
  width: 150px;
  object-fit: cover;
  justify-self: center;
  animation: ease-in-out 2s fadeIn;
}

.description {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 5px;
  animation: ease-in-out 2s fadeIn;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  margin: 5px;
  animation: ease-in-out 2s fadeIn;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

}
</style>