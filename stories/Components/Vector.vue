<script>
import Vector from '../../components/Vector'

import codeSample from './code/Vector.txt'

export default {

  components: {
    Vector
  },

  data () {
    return {
      codeSample
    }
  }

}

</script>

<template>
  <div>

    <h1>Vector</h1>

    <p>
      <vector src="plus" />
      <vector src="chevron-right" />
    </p>

    <html-block :source="codeSample" />

  </div>
</template>
