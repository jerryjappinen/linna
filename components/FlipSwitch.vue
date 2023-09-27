<script>
// This is a read-only component that visualizes state
// Wrap this component in a control component to deliver complete form element behavior
export default {
  name: 'FlipSwitch',
  props: {
    value: {},
    disabled: {}
  }
}
</script>

<template>
  <div
    class="c-flip-switch"
    :class="{
      'c-flip-switch-on': !!value,
      'c-flip-switch-off': !value,
      'c-flip-switch-disabled': !!disabled,
      'c-flip-switch-enabled': !disabled
    }"
  >
    <div class="c-flip-switch-knob" />
  </div>
</template>

<style lang="scss">
$c-flip-switch-track-height: 1.2em;
$c-flip-switch-track-width: $c-flip-switch-track-height * 2;
$c-flip-switch-knob-margin: 0.1em;
$c-flip-switch-knob-width: $c-flip-switch-track-height - (2 * $c-flip-switch-knob-margin);

.c-flip-switch,
.c-flip-switch-knob {
  @include transition-slow;
  @include transition-properties-common;
}

.c-flip-switch {
  position: relative;
  display: inline-block;
  border-radius: 100px;
  vertical-align: middle;
  border-width: 2px;

  width: $c-flip-switch-track-width;
  height: $c-flip-switch-track-height;

  // Default for enabled, off state
  border-color: currentColor;
  // background-color: $light-grey;
}

.c-flip-switch-knob {
  position: relative;
  top: $c-flip-switch-knob-margin;
  left: $c-flip-switch-knob-margin;
  box-sizing: border-box;
  display: block;

  width: $c-flip-switch-knob-width;
  height: $c-flip-switch-knob-width;

  // Default for off state
  @include round;
  @include hover-shadow-rest($dark, (3px));
  background-color: currentColor;
  transform: translate3d(0, 0, 0);
}



// On states

.c-flip-switch-on {
  background-color: currentColor;

  .c-flip-switch-knob {
    background-color: $white;
    transform: translate3d(#{$c-flip-switch-track-width - ($c-flip-switch-knob-margin * 2) - $c-flip-switch-knob-width}, 0, 0);
  }

}



// Enabled/disabled states

.c-flip-switch-disabled {
  border-color: $grey;

  &.c-flip-switch-on {
    border-color: transparent;
    background-color: $light-grey;
  }

  .c-flip-switch-knob {
    background-color: $grey;
  }

}

.c-flip-switch-enabled {

  &.c-flip-switch-on,
  &.c-flip-switch-on .c-flip-switch-knob {
    @include transition-fast;
  }

}

// Feedback under controls
// Utility classes should be used by the component or element that controls the behavior
// This is already set in the standard control components
.control-enabled {
  &:hover {
    .c-flip-switch-knob {
      @include transition-fast;
      @include hover-shadow($dark, 3px);
    }
  }
}

</style>
