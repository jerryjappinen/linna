<script>
import Vector from './Vector'

export default {
  name: 'Icon',

  components: {
    Vector
  },

  props: {
    src: {},
    title: {}
  }

}
</script>

<template>
  <vector
    class="c-icon"
    :src="src"
    :title="title || src"
  />
</template>

<style lang="scss">

.c-icon {
  width: 1em;
  height: 1em;
}

</style>
