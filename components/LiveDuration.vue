<script>
import time from '../services/time'

export default {
  name: 'LiveDuration',

  props: {
    date: {},
    prefix: {},
    suffix: {},
    cutoff: {}
  },

  data () {
    return {
      currentTime: time.current
    }
  }

}
</script>

<template>
  <duration
    class="c-live-duration"
    :date="date"
    :end-date="currentTime"
    :prefix="prefix"
    :suffix="suffix"
    :cutoff="cutoff"
  />
</template>
