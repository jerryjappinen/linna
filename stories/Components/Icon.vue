<script>
import Icon from '../../components/Icon'

import codeSample from './code/Icon.txt'

export default {

  components: {
    Icon
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

    <h1>Icon</h1>

    <p>
      <icon src="plus" />
      <icon src="arrow-left" />
      <icon src="arrow-right" />
    </p>

    <html-block :source="codeSample" />

  </div>
</template>
