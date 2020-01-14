<script>
import SpeakerdeckPlayer from '../../components/SpeakerdeckPlayer'

export default {

  components: {
    SpeakerdeckPlayer
  },

  data () {
    return {
      deckId: '110561d7d23244b180b282ea1372af86'
    }
  }

}

</script>

<template>
  <div>

    <h1>SpeakerdeckPlayer</h1>

    <p>
      Use the "copy embed code" button on SpeakerDeck to get the the embed code. The deck ID you need is in the embed code.
    </p>

    <speakerdeck-player :deck="deckId" />

  </div>
</template>
