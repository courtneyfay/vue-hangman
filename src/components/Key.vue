<template>
  <div>
    <h1 @click="animateLetter(letter)" :class="[isGrowing ? 'grow' : 'key', 'key']">{{ letter }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    letter: {
      type: String,
      required: true,
      default: 'A'
    },
    isGrowing: false
  },
  methods: {
    emitLetter(letter) {
      this.$emit('select-letter', letter)
    },
    animateLetter(letter) {
      console.log('Keyboard', letter)
      this.isGrowing = true
    }
  }
}
</script>

<style scoped>
.key {
  background-color: gray;
  display: inline;
  color: white;
}
.grow {
  background-color: pink;
  /* transition: all 0.2s ease-in-out;
  transform: scale(1.1); */
}
.shrink {
  background-color: white;
}
</style>
