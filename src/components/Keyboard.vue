<template>
  <div>
    <div class="keyboard-row">
      <Key v-for="letter in topRow" :letter="letter" :key="letter" class="keys"/>
    </div>
    <div class="keyboard-row">
      <Key v-for="letter in middleRow" :letter="letter" :key="letter" class="keys"/>
    </div>
    <div class="keyboard-row">
      <Key v-for="letter in bottomRow" :letter="letter" :key="letter" class="keys"/>
    </div>
  </div>
</template>

<script>
import Key from '@/components/Key.vue'

export default {
  name: 'Keyboard',
  components: {
    Key
  },
  data() {
    return {
      topRow: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      middleRow: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      bottomRow: ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    }
  }
}
</script>

<style scoped>
.keyboard-row {
  background-color: black;
  display: block;
}
.keys {
  display: inline;
  padding-right: 5px;
}
</style>
