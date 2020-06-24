<script>
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'

export default {
  name: 'Dump',

  props: {
    value: {
      default: null
    }
  },

  computed: {
    content () {
      if (isNumber(this.value) || isString(this.value)) {
        return this.value
      }
      return JSON.stringify(this.value, null, 2)
    }
  }

}
</script>

<template>
  <pre class="c-dump"><code>{{ content }}</code></pre>
</template>
