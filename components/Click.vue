<script>
export default {
  name: 'Click',

  props: {
    disabled: {},

    block: {
      default: false
    },

    button: {
      default: false
    }

  },

  data () {
    return {
      mouseDown: false
    }
  },

  computed: {

    component () {

      if (this.button) {
        return 'button'
      }

      if (this.block) {
        return 'div'
      }

      return 'span'
    }

  },

  methods: {

    onMouseDown () {
      this.mouseDown = true
    },

    onMouseUp () {
      this.mouseDown = false
    },

    onClick (event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }

  }

}
</script>

<template>
  <component
    :is="component"
    class="c-click control"
    :class="{
      'c-click-enabled': !disabled,
      'c-click-disabled': disabled,
      'c-click-inline': !block,
      'control-disabled': disabled,
      'control-enabled': !disabled,
      'control-mouse-down': mouseDown
    }"
    @click="onClick"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  ><slot /></component>
</template>

<style lang="scss">

.c-click-inline {
  @include inline-block;
}

</style>
