<script>
import trimAllWhitespace from '../../util/trimAllWhitespace'

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
    trimAllWhitespace
  }

}

</script>

<template>
  <div>

    <h1><code>trimAllWhitespace(string)</code></h1>

    <js-block source="import trimAllWhitespace from 'linna/util/trimAllWhitespace'" />

    <p>
      String with copious amounts of whitespace like this
    </p>

    <js-block :source="string" />

    <p>
      becomes
    </p>

    <js-block :source="trimAllWhitespace(string)" />

  </div>
</template>
