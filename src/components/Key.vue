<template>
  <div>
    <h1
      @click="animateClick"
      :class="[growing ? 'grow' : 'key', 'key', `${letter}`]"
      :key="letter"
    >{{ letter }}</h1>
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

      key.classList.add('grow')
    })
  },
  methods: {
    animateClick() {
      this.growing = true
    },
    animateKeypress() {
      this.growing = true
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
  opacity: 0.5;
}
.shrink {
  background-color: white;
}
</style>
