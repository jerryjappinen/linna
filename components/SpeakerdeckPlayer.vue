<script>
export default {
  name: 'SpeakerdeckPlayer',

  props: {
    deck: {
      type: String,
      required: true
    }
  },

  mounted () {
    const scriptTag = document.createElement('script')

    scriptTag.setAttribute('async', true)
    scriptTag.setAttribute('class', 'c-speakerdeck-player-embed speakerdeck-embed')
    scriptTag.setAttribute('data-id', this.deck)
    scriptTag.setAttribute('data-ratio', '1.77777777777778')
    scriptTag.setAttribute('src', '//speakerdeck.com/assets/embed.js')

    this.$el.appendChild(scriptTag)
  }

}
</script>

<template>
  <div class="c-speakerdeck-player" />
</template>

<style lang="scss">

.c-speakerdeck-player {
  width: 100%;
  height: 100%;

  .speakerdeck-embed-wrapper {
    width: 100%;
    height: 100%;
  }

  // Cancel vendor styling
  .speakerdeck-iframe {
    box-shadow: none !important;
    border-radius: 0 !important;
    background-color: transparent !important;
    width: 100% !important;
    height: 100% !important;
  }

}

</style>
