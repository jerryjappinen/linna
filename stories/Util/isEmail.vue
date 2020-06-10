<script>
import isEmail from 'linna-util/isEmail'

export default {

  data () {
    return {
      demo: 'foo@bar.io'
    }
  },

  computed: {

    demoIsEmail () {
      return isEmail(this.demo)
    }

  }

}

</script>

<template>
  <div>

    <h1><code>isEmail(string)</code></h1>

    <js-block source="import isEmail from 'linna-util/isEmail'" />

    <p>
      <input v-model="demo">
      {{ demoIsEmail }}
    </p>

  </div>
</template>
