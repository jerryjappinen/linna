<script>
// Wrapper component for reducing boilerplate with transition
import { includes } from 'lodash'

const modes = ['out-in', 'simultaneous', 'in-out']
const defaultMode = modes[0]

export default {
  name: 'CustomTransition',

  props: {

    name: {
      type: String,
      default: null
    },

    mode: {
      type: String,
      required: false,
      default: defaultMode,

      // Accept empty string or any of the modes as input, in addition to empty values
      validator (value) {
        return includes(modes, value)
      }

    },

    appear: {},
    duration: {}

  },

  computed: {

    // NOTE
    // - Vue's default transition has no name, but it behaves like a simultaneous transition
    // - Here we have to convert the named mode we support in this custom component to null so that Vue defaults to is
    modeForVue () {
      return this.mode === 'simultaneous' ? null : this.mode
    }

  },

  methods: {

    getTransitionClassname (step) {
      return this.name ? 'transition-' + this.name + '-' + step : 'on-' + step
    }

  }

}
</script>

<template>

  <!-- https://vuejs.org/images/transition.png -->
  <transition
    :name="'transition-' + name"
    :mode="modeForVue"
    :appear="appear"
    :duration="duration"

    :enter-class="getTransitionClassname('enter')"
    :enter-active-class="getTransitionClassname('enter-active')"
    :enter-to-class="getTransitionClassname('enter-to')"
    :leave-class="getTransitionClassname('leave')"
    :leave-active-class="getTransitionClassname('leave-active')"
    :leave-to-class="getTransitionClassname('leave-to')"
    :appear-class="getTransitionClassname('appear')"
    :appear-to-class="getTransitionClassname('appear-to')"
    :appear-active-class="getTransitionClassname('appear-active')"
  >
    <slot />
  </transition>

</template>
