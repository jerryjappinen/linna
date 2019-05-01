<script>
import readme from '../../README.md'

import Bodytext from '../../components/Bodytext'
import Markdown from '../../components/Markdown'

export default {

  components: {
    Bodytext,
    Markdown
  },

  data () {
    return {
      readme
    }
  }

}

</script>

<template>
  <bodytext>
    <markdown :body="readme" />
  </bodytext>
</template>
