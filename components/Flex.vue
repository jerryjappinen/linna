<script>
export default {
  name: 'Flex',

  props: {

    inline: {
      default: false
    },

    center: {
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
      'c-buttons-inline': inline,
      'c-buttons-center': center,
      'c-buttons-justify': !!justify,
      'c-buttons-justify-start': (justify === 'start'),
      'c-buttons-justify-end': (justify === 'end')
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
