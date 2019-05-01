<script>
import Icon from './Icon'

// This is a read-only component that visualizes state
// Wrap this component in a control component to deliver complete form element behavior
export default {
  name: 'Checkbox',

  components: {
    Icon
  },

  props: [
    'value',
    'disabled'
  ]

}
</script>

<template>
  <div
    class="c-checkbox"
    :class="{
      'c-checkbox-on': !!value,
      'c-checkbox-off': !value,
      'c-checkbox-disabled': !!disabled,
      'c-checkbox-enabled': !disabled
    }"
  >
    <icon
      class="c-checkbox-icon"
      src="check"
    />
  </div>
</template>

<style lang="scss">

.c-checkbox,
.c-checkbox-icon {
  @include relative;
  @include transition-slow;
  @include transition-properties-common;
}

.c-checkbox {
  @include round;
  @include inline-block;
  vertical-align: middle;

  width: 1em;
  height: 1em;
  border-width: 2px;
  padding: $pad-tight-horizontal - (2 * 2px);

  // Default for enabled, off state
  color: $white;
  // background-color: $white;
  border-color: $dark;
}

.c-checkbox-icon {
  @include block;
  width: 1em;
  height: 1em;

  // Default for off state
  opacity: 0;
}



// On states

.c-checkbox-on {
  background-color: $dark;
  @include transition-fast;

  .c-checkbox-icon {
    opacity: 1;
    @include transition-fast;
  }

}



// Enabled/disabled states

.c-checkbox-disabled {
  color: $white;
  background-color: $very-light-grey;
  border-color: $grey;
}

// .c-checkbox-enabled {
//   &.c-checkbox-on {}
//   &.c-checkbox-off {}
// }

.control-enabled {
  @include cursor-pointer;

  .c-checkbox-enabled {
    @include hover-shadow-tight-rest($dark);
  }

  &:focus,
  &:hover {
    .c-checkbox-enabled {
      @include transition-fast;
      @include hover-shadow-tight;
    }
  }
}

</style>
