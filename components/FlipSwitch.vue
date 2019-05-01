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
$c-flip-switch-track-height: 8px;
$c-flip-switch-track-width: $c-flip-switch-track-height * 4;
$c-flip-switch-knob-scale: 2.5;

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

  width: $c-flip-switch-track-width;
  height: $c-flip-switch-track-height;

  // Since knob will overflow
  margin-left: $c-flip-switch-track-height / 2;
  margin-right: $c-flip-switch-track-height / 2;

  // Default for enabled, off state
  background-color: $light-grey;
}

.c-flip-switch-knob {
  position: relative;
  left: $c-flip-switch-track-width;
  box-sizing: border-box;
  display: block;

  width: $c-flip-switch-track-height;
  height: $c-flip-switch-track-height;

  // Default for off state
  @include round;
  @include hover-shadow-rest($dark, (3px / $c-flip-switch-knob-scale));
  background-color: $dark;
  transform:
    scale($c-flip-switch-knob-scale)
    translate3d((-$c-flip-switch-track-width) / $c-flip-switch-knob-scale, 0, 0);

}



// On states

.c-flip-switch-on {
  background-color: $blue;

  .c-flip-switch-knob {
    background-color: $dark;
    transform: scale($c-flip-switch-knob-scale) translate3d(-($c-flip-switch-track-height / 2), 0, 0);
  }

}



// Enabled/disabled states

.c-flip-switch-disabled {
  background-color: $light-grey;

  .c-flip-switch-knob {
    background-color: $grey;
  }

}

.c-flip-switch-enabled {

  &.c-flip-switch-on,
  &.c-flip-switch-on .c-flip-switch-knob {
    @include transition-fast;
  }

  // &.c-flip-switch-off {
  //   .c-flip-switch-knob {
  //     background-color: $dark;
  //   }
  // }

}

// Feedback under controls
// Utility classes should be used by the component or element that controls the behavior
// This is already set in the standard control components
.control-enabled {
  &:hover {
    .c-flip-switch-knob {
      @include transition-fast;
      @include hover-shadow($dark, (3px / $c-flip-switch-knob-scale));
    }
  }
}

</style>
