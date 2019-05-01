<script>
// Wrapper component to be used as a hit area. Using this makes it easier to style and control a hit area separately from the control visualisation inside it, for example in table rows

// This input is used by passing the value attribute with `.sync` modifier
// Internally this translates to two-way use of `value` prop
// State of the input is kept track of internally, and the result is $emitted to parent scope
// http://vuejs.org/guide/components.html#Form-Input-Components-using-Custom-Events
import ownValue from '../mixins/ownValue'

import Set from './Set'

export default {
  name: 'Toggle',

  components: {
    // eslint-disable-next-line vue/no-unused-components
    Set
  },

  mixins: [ownValue],

  props: {

    value: {
      type: Boolean,
      required: true
    },

    disabled: {},
    block: {},
    button: {}
  }

}
</script>

<template>
  <set
    class="c-toggle control"
    :class="{
      'c-toggle-on': ownValue,
      'c-toggle-off': !ownValue,
      'c-toggle-enabled': !disabled,
      'c-toggle-disabled': disabled,
      'c-toggle-inline': !block
    }"
    :value.sync="ownValue"
    :to="!ownValue"
    :block="block"
    :button="button"
    @click="$emit('click')"
  ><slot /></set>
</template>

<style lang="scss">

.c-toggle-inline {
  display: inline-block;
}

</style>
