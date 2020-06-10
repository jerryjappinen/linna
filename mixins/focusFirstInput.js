import focusFirstInput from 'linna-util//focusFirstInput'

export default {

  mounted () {
    this.focusFirstInput()
  },

  methods: {

    focusFirstInput (selector) {
      focusFirstInput(this.$el, selector)
    }

  }

}
