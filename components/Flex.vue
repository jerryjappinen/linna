<script>
export default {
  name: 'Flex',

  props: {

    center: {
      default: false
    },

    inline: {
      default: false
    },

    justify: {
      default: false
    }

  }

}
</script>

<template>
  <div
    class="c-flex"
    :class="{
      'c-flex-inline': inline,
      'c-flex-center': center,
      'c-flex-justify': !!justify,
      'c-flex-justify-start': (justify === 'start'),
      'c-flex-justify-end': (justify === 'end')
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss">

.c-flex {
  @include flex;
}

.c-flex-center {
  @include flex-center;
}

.c-flex-inline {
  @include inline-flex;
}

.c-flex-justify {
  justify-content: center;
}

.c-flex-justify-start {
  justify-content: flex-start;
}

.c-flex-justify-end {
  justify-content: flex-end;
}

</style>
