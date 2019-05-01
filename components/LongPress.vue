<script>
import longPress from '../directives/longPress'

export default {
  name: 'LongPress',

  directives: {
    longPress
  },

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
    },

    onLongPress (event) {
      if (!this.disabled) {
        this.$emit('long-press', event)
      }
    }

  }

}
</script>

<template>
  <component
    :is="component"
    v-long-press="600"
    class="c-long-press control"
    :class="{
      'c-long-press-enabled': !disabled,
      'c-long-press-disabled': disabled,
      'c-long-press-inline': !block,
      'control-disabled': disabled,
      'control-enabled': !disabled,
      'control-mouse-down': mouseDown
    }"
    @click="onClick"
    @long-press-start="onLongPress"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  ><slot /></component>
</template>

<style lang="scss">

.c-long-press-inline {
  @include inline-block;
}

</style>
