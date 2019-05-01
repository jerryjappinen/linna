<script>
import tryPromises from '../../util/tryPromises'
import wait from '../../util/wait'

import codeSample from './code/tryPromises.txt'

export default {

  data () {
    return {
      codeSample,
      results: null
    }
  },

  mounted () {
    this.demo()
  },

  methods: {

    async demo () {
      this.results = null
      this.results = await tryPromises([
        this.tryOne(),
        this.tryOne(),
        this.tryOne()
      ])
    },

    async tryOne () {
      await wait(Math.random() * 1000)

      if (Math.random() > 0.5) {
        return true
      }

      throw new Error('Failed randomly')
    }

  }

}

</script>

<template>
  <div>

    <h1><code>async tryPromises([promise1, promise2, ...])</code></h1>

    <js-block source="import tryPromises from 'linna/util/tryPromises'" />

    <p>
      Wait for multiple promises in parallel, but always resolve even if some promises fail. Failed promises resolve with <code>undefined</code>. Wraps <code>Promise.all</code> but doesn't throw an error.
    </p>

    <h3>Example</h3>

    <js-block :source="codeSample" />

    <actions>
      <button @click="demo">
        Reload
      </button>
    </actions>

    <json-block
      v-if="results"
      :source="results"
    />

    <p v-else>
      Waiting...
    </p>

  </div>
</template>
