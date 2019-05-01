<script>
import trimWhitespace from '../../util/trimWhitespace'

export default {

  data () {
    return {
      string: `



foo


bar     bar



      `
    }
  },

  methods: {
    trimWhitespace
  }

}

</script>

<template>
  <div>

    <h1><code>trimWhitespace(string)</code></h1>

    <js-block source="import trimWhitespace from 'linna/util/trimWhitespace'" />

    <p>
      String with copious amounts of whitespace like this
    </p>

    <js-block :source="string" />

    <p>
      becomes
    </p>

    <js-block :source="trimWhitespace(string)" />

  </div>
</template>
