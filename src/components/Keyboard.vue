<template>
  <div>
    <div v-for="(rows, index) in keyboardRows" class="keyboard-row" :key="rows[index]">
      <Key
        @select-letter="animateKey"
        v-for="letter in rows"
        :letter="letter"
        :key="letter"
        class="keys"
      />
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
      keyboardRows: [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
      ]
    }
  },
  created() {
    window.addEventListener('keyup', e => {
      this.animateKey(e.key)
    })
  },
  methods: {
    animateKey(letter) {
      console.log('Keyboard', letter)
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
