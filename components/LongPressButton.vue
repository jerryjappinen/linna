<script>
import longPress from '../directives/longPress'

import ClickButton from './ClickButton'

export default {
  name: 'LongPressButton',

  directives: {
    longPress
  },

  components: {
    ClickButton
  },

  props: {
    href: {},
    to: {},
    mailto: {},
    tel: {},
    external: {},
    noIndex: {},
    submit: {},
    tab: {},
    iconLeft: {},
    iconRight: {},
    loading: {},
    disabled: {}
  },

  methods: {

    onClick (event) {
      this.$emit('click', event)
    },

    onLongPress (event) {
      if (!this.disabled) {
        this.$emit('long-press', event)
      }
    }

  }

}
</script>

<template>
  <click-button
    v-long-press="600"
    :href="href"
    :to="to"
    :mailto="mailto"
    :tel="tel"
    :external="external"
    :no-index="noIndex"
    :submit="submit"
    :tab="tab"
    :icon-left="iconLeft"
    :icon-right="iconRight"
    :loading="loading"
    :disabled="disabled"
    @click="onClick"
    @long-press-start="onLongPress"
  >
    <slot />
  </click-button>
</template>
