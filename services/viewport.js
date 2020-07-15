import debounce from 'lodash/debounce'
import Vue from 'vue'

import styles from '../config/styles'

import detectObtrusiveScrollbars from 'linna-util/detectObtrusiveScrollbars'
import windowExists from 'linna-util/windowExists'

// Scroll position or dimensions are updated at most once per this amount of ms
const debounceDelay = 10
const debounceOptions = {
  leading: true
}

export default new Vue({

  data () {
    return {
      hasObtrusiveScrollbars: false,
      width: 0,
      height: 0,
      scrollX: 0,
      scrollY: 0,
      isScrollingDown: false,
      isScrollingUp: false,
      breakpointPhone: styles.breakpointPhone,
      breakpointTablet: styles.breakpointTablet,

      // Debounced callbacks
      $_debouncedOnResize: null,
      $_debouncedOnScroll: null
    }
  },

  computed: {

    centerX () {
      return this.width / 2
    },

    centerY () {
      return this.height / 2
    },

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



    // Matches moabit/mixins/screen/devices.scss

    isPhone () {
      return this.width <= this.breakpointPhone
    },

    isTablet () {
      return this.width > this.breakpointPhone
    },

    isUnderDesktop () {
      return this.width < this.breakpointTablet
    },

    isDesktop () {
      return this.width >= this.breakpointTablet
    }

  },

  watch: {

    scrollY (newValue, oldValue) {
      if (!this.isScrollingDown && newValue > oldValue) {
        this.isScrollingDown = true
        this.isScrollingUp = false
      } else if (!this.isScrollingUp && newValue < oldValue) {
        this.isScrollingDown = false
        this.isScrollingUp = true
      }
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

      if (detectObtrusiveScrollbars()) {
        this.hasObtrusiveScrollbars = true
      }

      this.$_debouncedOnResize = debounce(this.$_updateDimensions, debounceDelay, debounceOptions)
      this.$_debouncedOnScroll = debounce(this.$_updateScrollValues, debounceDelay, debounceOptions)

      window.addEventListener('resize', this.$_debouncedOnResize)
      window.addEventListener('scroll', this.$_debouncedOnScroll)
    },

    // Remove listeners
    onDestroy () {
      if (this.$_debouncedOnResize) {
        window.removeEventListener('resize', this.$_debouncedOnResize)
      }
      if (this.$_debouncedOnScroll) {
        window.removeEventListener('scroll', this.$_debouncedOnScroll)
      }
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
    }

  }

})
