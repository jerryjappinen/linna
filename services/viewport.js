import { debounce } from 'lodash'
import Vue from 'vue'

import styles from '../config/styles'

import windowExists from '../util/windowExists'

// Scroll position or dimensions are updated at most once per this amount of ms
const debounceDelay = 10

export default new Vue({

  data () {
    return {
      width: 0,
      height: 0,
      scrollX: 0,
      scrollY: 0
    }
  },

  computed: {

    isScrolled () {
      return this.scrollY > 0
    },

    isScrolledX () {
      return this.scrollX > 0
    },

    isLandscape () {
      return this.width > this.height
    },

    isPortrait () {
      return !this.isLandscape
    },



    // Matches mixin-viewport.scss

    isMobile () {
      return this.width < styles.breakpointMedium
    },

    isDesktop () {
      return this.width >= styles.breakpointMedium
    }

  },

  created () {
    if (windowExists()) {
      this.onCreated()
    }
  },

  beforeDestroy () {
    if (windowExists()) {
      this.onDestroy()
    }
  },

  methods: {

    // Bind listeners
    onCreated () {
      this.$_updateDimensions()
      this.$_updateScrollValues()

      window.addEventListener('resize', this.onResize)
      window.addEventListener('scroll', this.onScroll)
    },

    // Remove listeners
    onDestroy () {
      window.removeEventListener('resize', this.onResize)
      window.removeEventListener('scroll', this.onScroll)
    },



    // Helpers

    $_getScrollX () {
      return (window.pageXOffset || window.document.scrollLeft || 0) - (window.document.clientLeft || 0)
    },

    $_getScrollY () {
      return (window.pageYOffset || window.document.scrollTop || 0) - (window.document.clientTop || 0)
    },

    $_getWidth () {
      return window.innerWidth
    },

    $_getHeight () {
      return window.innerHeight
    },



    // Throttled updaters

    $_updateDimensions () {
      this.width = this.$_getWidth()
      this.height = this.$_getHeight()
    },

    $_updateScrollValues () {
      this.scrollX = this.$_getScrollX()
      this.scrollY = this.$_getScrollY()
    },

    // NOTE: won't work with arrow function since `this` scope will be different
    onResize: debounce(function () {
      this.$_updateDimensions()
    }, debounceDelay, {
      leading: true
    }),

    onScroll: debounce(function () {
      this.$_updateScrollValues()
    }, debounceDelay, {
      leading: true
    })

  }

})
