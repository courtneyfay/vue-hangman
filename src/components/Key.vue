<template>
  <div>
    <div
      @click="clickKey(letter)"
      :class="[growing ? 'grow' : 'key', 'key', `${letter}`]"
      :key="letter"
    >{{ letter }}</div>
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
  data() {
    return {
      growing: this.isGrowing
    }
  },
  created() {
    window.addEventListener('keyup', e => {
      const letter = e.key.toUpperCase()
      const key = document.querySelector(`.${letter}`)

      if (key) {
        key.classList.add('grow')
      }

      this.animateKey(letter)
    })
  },
  methods: {
    clickKey(letter) {
      this.growing = true
      this.$emit('select-key', letter)
    },
    animateKey(letter) {
      this.$emit('select-key', letter)
    }
  }
}
</script>

<style scoped>
.key {
  background-color: gray;
  display: inline;
  color: white;
  font-size: 3em;
  font-weight: bold;
  padding: 0 5px;
}
.grow {
  opacity: 0.5;
}
.shrink {
  background-color: white;
}
</style>
