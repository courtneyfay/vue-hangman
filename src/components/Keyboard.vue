<template>
  <div>
    <div v-for="(rows, index) in keyboardRows" class="keyboard" :key="rows[index]">
      <Key
        @select-letter="animateKey(letter)"
        v-for="letter in rows"
        @select-key="emitKey"
        :letter="letter"
        :key="letter"
        :isGrowing="isGrowing"
        class="keyboard-row"
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
      ],
      isGrowing: false
    }
  },
  methods: {
    emitKey(letter) {
      this.$emit('select-key', letter)
    }
  }
}
</script>

<style scoped>
.keyboard {
  background-color: black;
  display: block;
}
.keyboard-row {
  display: inline;
  padding-right: 5px;
}
</style>
