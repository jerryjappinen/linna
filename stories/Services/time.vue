<script>
import FormattedDate from '../../components/FormattedDate'
import time from '../../services/time'

import codeSample from './code/time.vue.txt'

export default {

  components: {
    FormattedDate
  },

  data () {
    return {
      codeSample
    }
  },

  computed: {
    current () {
      return time.current
    }
  }

}

</script>

<template>
  <div class="root">

    <h1>Time service</h1>

    <js-block source="import time from 'linna/services/time'" />

    <p>
      Get basic, reactive information about current time.
    </p>

    <h3>Dependencies</h3>

    <p>
      raf
    </p>

    <h3>Example</h3>

    <p>
      <formatted-date :date="current" /> {{ current }}
    </p>

    <html-block :source="codeSample" />

  </div>
</template>
