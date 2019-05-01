<script>
import log from '../../log'
import time from '../../log/time'
import trace from '../../log/trace'
import warn from '../../log/warn'

export default {

  methods: {

    log () {
      log('log')
    },

    time () {
      time()
    },

    trace () {
      trace('trace')
    },

    warn () {
      warn('warn')
    }

  }

}

</script>

<template>
  <div>

    <h1>Logging</h1>

    <p>
      Open console to see logging output
    </p>

    <actions>

      <button @click="log">
        log
      </button>

      <button @click="time">
        time
      </button>

      <button @click="trace">
        trace
      </button>

      <button @click="warn">
        warn
      </button>
    </actions>

  </div>
</template>
