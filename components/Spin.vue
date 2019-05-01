<script>
import Animation from './Animation'

export default {
  name: 'Spin',

  components: {
    Animation
  },

  props: {
    count: {},
    duration: {},
    easing: {}
  }

}
</script>

<template>
  <animation
    class="c-spin"
    :name="'spin' + '-' + $options._scopeId"
    :count="count"
    :duration="duration"
    :easing="easing"
  >
    <slot />
  </animation>
</template>

<style lang="scss" scoped>

@keyframes spin {

  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }

}

</style>
