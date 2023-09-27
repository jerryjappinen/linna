<script>
export default {
  name: 'Buttons',

  props: {

    fill: {
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
      'c-buttons-fill': fill,
      'c-buttons-fill-center': fill && center
    }"
  ><slot /></div>
</template>

<style lang="scss">

.c-buttons {
  @include flex;
  @include flex-center;

  > * {
    &:not(:last-child) {
      margin-right: $pad-loose-horizontal;
    }
  }

}

.c-buttons-center {
  justify-content: center;
}

.c-buttons-fill {
  > * {
    @include flex-grow;
  }
}

</style>
