<script>
import LongPressButton from '../../components/LongPressButton'

export default {

  components: {
    LongPressButton
  },

  methods: {

    onClick () {
      alert('Click')
    },

    onLongPress () {
      alert('Long press')
    }

  }

}

</script>

<template>
  <div>

    <h1>LongPressButton</h1>

    <p>
      <long-press-button
        @click="onClick"
        @long-press="onLongPress"
      >
        Long press or click
      </long-press-button>
    </p>

  </div>
</template>
