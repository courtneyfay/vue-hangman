<template>
  <div>
    <h1 @click="emitLetter(letter)">{{ letter }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    letter: {
      type: String,
      required: true,
      default: 'A'
    }
  },
  methods: {
    emitLetter(letter) {
      console.log(letter)
      this.$emit('keyclick', letter)
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: gray;
  display: inline;
  color: white;
}
</style>
