<script>
import { isNumber } from 'lodash'

const isBrowser = process ? !!process.browser : true

const clientOnlyComponents = {}
if (isBrowser) {
  clientOnlyComponents.Flickity = require('vue-flickity').default

  // https://github.com/drewjbartlett/vue-flickity/issues/12
  clientOnlyComponents.Flickity.beforeDestroy = undefined
}

// https://flickity.metafizzy.co/options.html
const defaultFlickityOptions = {
  draggable: true,
  freeScroll: true,
  freeScrollFriction: 0.05,
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  selectedAttraction: 0.05,
  friction: 0.35,
  cellAlign: 'left'
}

export default {
  name: 'SwipableContainer',

  components: {
    ...clientOnlyComponents
  },

  props: {

    overflow: {
      default: false
    },

    bullets: {
      default: false
    },

    buttons: {
      default: false
    },

    paginate: {
      default: false
    },

    center: {
      default: false
    },

    clickToSelect: {
      default: false
    },

    clickToAdvance: {
      default: false
    }

  },

  data () {
    return {
      isDragging: false
    }
  },

  computed: {

    flickityOptions () {

      const options = {}

      if (this.center) {
        options.cellAlign = 'center'
      }

      if (this.bullets) {
        options.pageDots = true
      }

      if (this.buttons) {
        options.prevNextButtons = true
      }

      if (this.center || this.paginate) {
        options.freeScroll = false
      }

      options.friction = 0.5
      options.selectedAttraction = 0.075

      return {
        ...defaultFlickityOptions,
        ...options,
        on: {
          change: this.onSlideChange,
          dragMove: this.onDragMove,
          dragEnd: this.onDragEnd,
          ready: this.deferUpdate,
          settle: this.onSlideSettle,
          staticClick: this.onSlideClick
        }
      }
    },

    component () {

      if (isBrowser) {
        return 'flickity'
      }

      return 'div'
    },

    isPlaceholder () {
      return this.component !== 'flickity'
    }

  },

  methods: {

    getCurrentIndex () {
      if (this.$refs.flickity) {
        return this.$refs.flickity.selectedIndex()
      }
      return null
    },

    getMaxIndex () {
      if (this.$refs.flickity) {
        return this.$refs.flickity.slides().length - 1
      }
      return null
    },



    // We run this as images usually take some time to load and resize doesn't listen to them
    // Ideally we'd fire this upon image load but that's a lot of fanciness for little gain
    deferUpdate () {
      setTimeout(this.update, 500)
    },

    update () {
      if (this.$refs.flickity && this.$refs.flickity.resize) {
        this.$refs.flickity.resize()
      }
    },



    // Event handlers

    onSlideChange (newIndex) {
      this.$emit('change', newIndex)

      if (!newIndex) {
        this.$emit('change:first', newIndex)
      }

      if (newIndex === this.getMaxIndex()) {
        this.$emit('change:last', newIndex)
      }

    },

    onSlideSettle (newIndex) {
      this.$emit('settle', newIndex)

      if (!newIndex) {
        this.$emit('settle:first', newIndex)
      }

      if (newIndex === this.getMaxIndex()) {
        this.$emit('settle:last', newIndex)
      }

    },

    onSlideClick (event, pointer, cellElement, clickedIndex) {
      if (this.$refs.flickity) {

        if (isNumber(clickedIndex)) {
          const currentIndex = this.getCurrentIndex()
          const maxIndex = this.getMaxIndex()

          // Events
          this.$emit('click', event, clickedIndex)

          if (!clickedIndex) {
            this.$emit('click:first', event)
          }

          if (clickedIndex === maxIndex) {
            this.$emit('click:last', event)

            if (currentIndex === maxIndex) {
              this.$emit('click:last-double', event)
            }

          }


          // Go to next slide
          if (this.clickToAdvance && currentIndex === clickedIndex) {
            this.$refs.flickity.next()

          // Go to selected slide
          } else if (this.clickToSelect) {
            this.$refs.flickity.select(clickedIndex)
          }

        }

      }
    },

    onDragMove () {
      if (!this.isDragging) {
        this.isDragging = true
      }
    },

    onDragEnd () {
      if (this.isDragging) {
        this.isDragging = false
      }
    }

  }

}
</script>

<template>
  <div
    class="c-swipable-container"
    :class="{
      'c-swipable-container-dragging': isDragging,
      'c-swipable-container-no-overflow': !overflow,
      'c-swipable-container-overflow': overflow
    }"
  >

    <component
      :is="component"
      ref="flickity"
      :class="{
        'c-swipable-container-swipable': !isPlaceholder,
        'c-swipable-container-placeholder': isPlaceholder
      }"
      :options="component === 'flickity' ? flickityOptions : null"
      class="c-swipable-container-content"
    >
      <slot />
    </component>

  </div>
</template>

<style lang="scss">

.c-swipable-container {

  .flickity-viewport {
    @include visible-overflow;
  }

  .flickity-enabled {
    &.is-draggable {
      .flickity-viewport {
        cursor: inherit;
      }
    }
  }

  .flickity-page-dots {

    .dot {
      @include relative;
      @include no-radius;
      width: 0.75em;
      height: $line-height-em;
      margin-left: 0;
      margin-right: 0;
      background-color: transparent;

      &:after {
        @include keep-full-center;
        @include round;
        content: '';
        width: 8px;
        height: 8px;
        box-shadow: inset 0 0 0 1px $very-dark;
        background-color: $white;
      }

      @include transition-properties-common;
      @include transition-hover;

      &:hover {
        opacity: 1;
      }

    }

  }

  .flickity-button {
    color: $very-dark;
    background-color: translucent($white, 0.25);
    @include transition-hover;

    &:disabled {
      opacity: 0;
    }

    &:hover {
      background-color: $white;
    }

  }

  .flickity-prev-next-button {
    .flickity-button-icon {
      left: 30%;
      top: 30%;
      width: 40%;
      height: 40%;
    }
  }

}

.c-swipable-container-no-overflow {
  @include no-overflow;

  .c-swipable-container-placeholder {
    @include no-overflow;
  }

}

.c-swipable-container-dragging {
  @include no-pointer-events;
}

</style>
