<template>
  <div class="root">
    <slot />
  </div>
</template>

<style lang="scss" scoped>

.root {
  @include flex;

  a,
  button,
  input {
    @include radius;
    @include pad-horizontal;
    margin-right: 1em;
  }

  input {
    border-width: 1px;
  }

  a,
  button {
    @include pad-loose-vertical;
    color: $white;
    background-color: $very-dark;

    &:hover {
      background-color: $dark;
    }

    &:active {
      transform: translateY(2px);
    }

  }
}

</style>
