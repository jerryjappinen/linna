<script>
import CustomTransition from './CustomTransition'

export default {
  name: 'FadeDrop',

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
    name="fade-drop"
  ><slot /></custom-transition>
</template>

<style lang="scss">

.transition-fade-drop-enter-active,
.transition-fade-drop-leave-active {
  opacity: 1;
  transform: translate3d(0, 0, 0);

  @include transition-fast;
  @include transition-properties-common;
}

.transition-fade-drop-enter,
.transition-fade-drop-leave-to {
  opacity: 0;
}

.transition-fade-drop-enter {
  transform: translate3d(0, -4px, 0);
}

.transition-fade-drop-leave-to {
  transform: translate3d(0, 4px, 0);
}

</style>
