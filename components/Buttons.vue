<script>
export default {
  name: 'Buttons',

  props: {

    grid: {
      default: false
    },

    center: {
      default: false
    }

  }

}
</script>

<template>
  <div
    class="c-buttons"
    :class="{
      'c-buttons-center': center,
      'c-buttons-grid': grid,
      'c-buttons-grid-center': grid && center,
      'c-buttons-flex': !grid,
      'c-buttons-flex-center': !grid && center
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss">

.c-buttons-flex {
  @include flex;
  @include flex-center;

  > * {
    + * {
      margin-left: $pad-loose-horizontal;
    }
  }

}

.c-buttons-flex-center {
  justify-content: center;
}

</style>
