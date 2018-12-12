<template>
  <div>
    <h1>{{ letter }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    letter: {
      type: String,
      required: true,
      default: 'a'
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
