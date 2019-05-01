// Writable computed
// NOTE: This guy handles emitting out of component scope, which makes 2-way binding work
export default {

  computed: {

    ownValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('update:value', value)
      }
    }

  }

}
