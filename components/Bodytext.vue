<script>
import eventHasMetaKey from '../util/eventHasMetaKey'
import linkIsInternal from '../util/linkIsInternal'

export default {
  name: 'Bodytext',

  props: {

    discreet: {
      default: false
    },

    lineBreaks: {
      default: false
    }

  },

  methods: {

    // FIXME: replication
    // FIXME: should be in a utility
    modifyExternalLink (el) {
      const originalRel = el.getAttribute('rel')
      const originalTarget = el.getAttribute('target')
      const desiredRel = 'nofollow'
      const desiredTarget = '_blank'

      if (originalRel !== desiredRel) {
        el.setAttribute('rel', desiredRel)
      }

      if (originalTarget !== desiredTarget) {
        el.setAttribute('target', desiredTarget)
      }

      // Return attributes after a delay
      this.$nextTick(() => {

        if (originalRel !== desiredRel) {
          if (originalRel) {
            el.setAttribute('rel', originalRel)
          } else {
            el.removeAttribute('rel')
          }
        }

        if (originalTarget !== desiredTarget) {
          if (originalTarget) {
            el.setAttribute('target', originalTarget)
          } else {
            el.removeAttribute('target')
          }
        }

      })

    },

    // Event delegation
    onClick (event) {

      // Links
      if (event.target.tagName === 'A') {

        // Temporarily make link external if user didn't press meta key
        if (
          !eventHasMetaKey(event) &&
          !linkIsInternal(event.target)
        ) {
          this.modifyExternalLink(event.target)
        }

      }
    }

  }

}
</script>

<template>
  <div
    class="c-bodytext bodytext"
    :class="{
      'bodytext-discreet': discreet,
      'c-bodytext-discreet': discreet,
      'bodytext-with-line-breaks': lineBreaks,
      'c-bodytext-with-line-breaks': lineBreaks
    }"
    @click="onClick"
  >
    <slot />
  </div>
</template>
