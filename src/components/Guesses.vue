<template>
  <div>
    <div v-for="guess in guesses" :key="guess" class="guesses">
      <div class="guess">{{ guess }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guesses: {} //add type check
  }
}
</script>

<style scoped>
.guesses {
  display: inline-block;
}

.guess {
  color: lightskyblue;
  font-size: 2em;
  font-weight: bold;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
