<script>
import wait from '../../util/wait'

import codeSample from './code/wait.txt'

const delay = 3000

export default {

  data () {
    return {
      codeSample,
      pings: []
    }
  },

  mounted () {
    this.demo()
  },

  methods: {

    async demo () {
      for (let i = 0; i < 10; i++) {
        this.ping()
        await wait(delay)
      }
    },

    ping () {
      this.pings.push(Math.random())
    }

  }

}

</script>

<template>
  <div>

    <h1><code>async wait(delay: 2000)</code></h1>

    <js-block source="import trimWhitespace from 'linna/util/trimWhitespace'" />

    <p>
      Delay resolution of asynchronous code. This is mostly useful for debugging and testing.
    </p>

    <h3>Example</h3>

    <js-block :source="codeSample" />

    <json-block :source="pings" />

  </div>
</template>
