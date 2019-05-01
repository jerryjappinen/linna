<script>
import CustomTransition from './CustomTransition'

export default {
  name: 'Fade',

  components: {
    CustomTransition
  },

  props: [
    'mode',
    'appear'
  ]

}
</script>

<template>
  <custom-transition
    :mode="mode"
    :appear="appear"
    name="fade"
  ><slot /></custom-transition>
</template>

<style lang="scss">
.transition-fade-enter-active,
.transition-fade-leave-active {
  // opacity: 1;
  @include transition-fast;
  @include transition-properties-common;
}

// Start state for enter
.transition-fade-enter,

// End state for exit
.transition-fade-leave-to {
  opacity: 0;
}

</style>
