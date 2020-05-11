<script>
import Fade from './Fade'
import Icon from './Icon'
import Spinner from './Spinner'

export default {
  name: 'ClickButton',

  components: {
    Fade,
    Icon,
    Spinner
  },

  props: {

    // Target link

    href: {
      type: String,
      default: null
    },

    to: {
      type: [String, Object],
      default: null
    },

    mailto: {
      type: String,
      default: null
    },

    tel: {
      type: String,
      default: null
    },

    external: {
      default: null
    },

    noIndex: {
      default: null
    },

    submit: {
      default: null
    },

    tab: {
      default: true
    },

    iconLeft: {
      default: null
    },

    iconRight: {
      default: null
    },



    // State params

    loading: {
      default: null
    },

    disabled: {
      default: false
    }

  },

  computed: {

    component () {

      if (this.href || this.mailto || this.tel) {
        return 'a'
      }

      if (this.to) {
        return this.$nuxt ? 'nuxt-link' : 'router-link'
      }

      return 'button'
    },

    isRouterLink () {
      return !!(this.component === 'router-link' || this.component === 'nuxt-link')
    },

    bindings () {
      const bindings = {}

      if (!this.tab) {
        bindings.tabindex = '-1'
      }

      // Email address
      if (this.mailto) {
        bindings.href = 'mailto:' + this.mailto

      // Button
      } else if (this.tel) {
        bindings.href = 'tel:' + this.tel

      // Button
      } else if (this.component === 'button') {
        bindings.type = this.submit ? 'submit' : 'button'

      // Link
      } else {

        if (this.to) {
          bindings.to = this.to
        }

        if (this.href) {
          bindings.href = this.href
        }

        if (this.external || this.noIndex) {
          bindings.rel = 'nofollow'
        }

        if (this.external) {
          bindings.target = '_blank'
        }

      }

      return bindings
    }

  },

  methods: {

    onClick (event) {
      if (!this.disabled) {
        this.$emit('click', event)
      }
    }

  }

}
</script>

<template>
  <component
    :is="component"
    v-bind="bindings"
    class="c-click-button"
    :class="{
      'c-click-button-loading': !!loading,
      'c-click-button-not-loading': !loading,
      'c-click-button-disabled': !!disabled,
      'c-click-button-enabled': !disabled
    }"
    :disabled="disabled"
    @click="onClick"
    @click.native="isRouterLink ? onClick : undefined"
  >

    <fade>
      <spinner
        v-if="loading"
        class="c-click-button-spinner"
      />
    </fade>

    <fade>
      <icon
        v-if="iconLeft && !loading"
        :src="iconLeft"
        class="c-click-button-icon c-click-button-icon-left"
      />
    </fade>

    <fade>
      <icon
        v-if="iconRight && !loading"
        :src="iconRight"
        class="c-click-button-icon c-click-button-icon-right"
      />
    </fade>

    <span class="c-click-button-content">
      <slot />
    </span>

  </component>
</template>

<style lang="scss">

.c-click-button {
  @include relative;
  @include border-box;
  @include flex-center;
  @include inline-flex;
  line-height: inherit;
  border-width: 0;
  text-align: inherit;
  white-space: nowrap;
}

.c-click-button-content {
  @include border-box;
  @include relative;
  @include block;
  @include flex-center;
  @include flex;
  z-index: 2;

  @include transition-properties(opacity);
}

.c-click-button-spinner {
  @include keep-full-center;
  z-index: 1;
  height: 1em;
}

.c-click-button-icon {
  @include absolute;
  top: 50%;
  transform: translateY(-50%);
}

.c-click-button-icon-left {
  left: 0;

  ~ .c-click-button-content {
    padding-left: calc(1em + #{$pad-tight-horizontal});
  }

}

.c-click-button-icon-right {
  right: 0;

  ~ .c-click-button-content {
    padding-right: calc(1em + #{$pad-tight-horizontal});
  }

}



// Loading states

.c-click-button-not-loading {

  .c-click-button-content,
  .c-click-button-spinner {
    @include transition-slow;
  }

  .c-click-button-content {
    opacity: 1;
    @include transition-delay-slow;
  }

}

.c-click-button-loading {

  .c-click-button-content,
  .c-click-button-spinner {
    @include transition-fast;
  }

  .c-click-button-content {
    opacity: 0;
  }

  .c-click-button-spinner {
    opacity: 1;
    @include transition-delay-fast;
  }

}



// States

.c-click-button-disabled {
  @include inherit-cursor;
}

.c-click-button-enabled {
  @include pointer;

  &:active {
    // @include scale(0.975);
    @include translate-down(2px);
  }

}

</style>
