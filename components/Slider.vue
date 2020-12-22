<script>
import isNumber from 'lodash/isNumber'

// https://nightcatsama.github.io/vue-slider-component/#/
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'

import ownValue from '../mixins/ownValue'

export default {
  name: 'Slider',

  components: {
    VueSlider
  },

  mixins: [ownValue],

  props: {

    value: {
      type: Number,
      required: true
    },

    disabled: {
      type: Boolean,
      default: false
    },

    lazy: {
      type: Boolean,
      default: false
    },

    inverted: {
      type: Boolean,
      default: false
    },

    vertical: {
      type: Boolean,
      default: false
    },

    data: {
      type: [Array, Object],
      default: null
    },

    min: {
      type: Number,
      default: null
    },

    max: {
      type: Number,
      default: null
    },

    interval: {
      type: Number,
      default: null
    },

    tooltip: {
      type: [Boolean, String],
      default: true
    }

  },

  data () {
    return {
      mouseDown: false
    }
  },

  computed: {

    options () {
      const options = {
        dotSize: 24,
        height: 4,
        duration: 0.15,
        dragOnClick: true,
        adsorb: true,
        tooltip: this.tooltip ? 'active' : 'none',
        tooltipPlacement: this.tooltip === true ? 'top' : this.tooltip,
        enableCross: false

        // dataLabel: 'label',
        // dataValue: 'value'
      }

      if (this.lazy) {
        options.lazy = true
      }

      if (this.disabled) {
        options.disabled = true
      }

      if (this.data) {
        options.data = this.data
      }

      if (isNumber(this.min)) {
        options.min = this.min
      }

      if (isNumber(this.min)) {
        options.min = this.min
      }

      if (isNumber(this.max)) {
        options.max = this.max
      }

      if (this.vertical) {
        options.direction = 'ttb'
      }

      if (this.inverted) {
        if (this.vertical) {
          options.direction = 'btt'
        } else {
          options.direction = 'rtl'
        }
      }

      return options
    }

  },

  methods: {

    onMouseDown () {
      this.mouseDown = true
    },

    onMouseUp () {
      this.mouseDown = false
    }

  }

}
</script>

<template>
  <vue-slider
    v-model="ownValue"
    class="c-slider control"
    :class="{
      'control-disabled': disabled,
      'control-enabled': !disabled,
      'control-mouse-down': mouseDown
    }"
    v-bind="options"
    v-on="{
      ...$listeners,
      mouseup: onMouseUp,
      mousedown: onMouseDown
    }"
  />
</template>

<style lang="scss">

.c-slider {

  .vue-slider-dot-handle {
    @include shadow-tight;
    background-clip: padding-box;
    background-color: $white;
    border-width: 1px;
    border-color: translucent($very-dark);
  }

  .vue-slider-rail {
    background-color: translucent($very-dark);
  }

  .vue-slider-process {
    background-color: $very-dark;
  }

  .vue-slider-dot-tooltip-inner {
    border-color: $very-dark;
    background-color: $very-dark;
  }

}

</style>
