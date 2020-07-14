<script>
import ConditionalLink from '../../components/ConditionalLink'

export default {

  components: {
    ConditionalLink
  },

  methods: {

    onClick () {
      alert('Click')
    }

  }

}

</script>

<template>
  <div>

    <h1>ConditionalLink</h1>

    <div class="grid">

      <conditional-link @click="onClick">
        onClick
      </conditional-link>

      <conditional-link to="/foo">
        With :to
      </conditional-link>

      <conditional-link>
        Empty
      </conditional-link>

      <conditional-link href="https://foo/bar">
        With href
      </conditional-link>

      <conditional-link
        href="https://foo/bar"
        :external="true"
      >
        External
      </conditional-link>

      <conditional-link @click="onClick">
        onClick
      </conditional-link>

    </div>

  </div>
</template>

<style lang="scss" scoped>

.grid {
  @include flex;
  @include flex-wrap;

  > * {
    @include push-pad-right;
  }

}

</style>
