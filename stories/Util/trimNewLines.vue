<script>
import trimNewLines from '../../util/trimNewLines'


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
    trimNewLines
  }

}

</script>

<template>
  <div>

    <h1><code>trimNewLines(string)</code></h1>

    <js-block source="import trimNewLines from 'linna/util/trimNewLines'" />

    <p>
      String with copious amounts of whitespace like this
    </p>

    <js-block :source="string" />

    <p>
      becomes
    </p>

    <js-block :source="trimNewLines(string)" />

  </div>
</template>
