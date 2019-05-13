<script>
import EmailLink from '../../components/EmailLink'

import codeSample from './code/EmailLink.txt'

export default {

  components: {
    EmailLink
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

    <h1>EmailLink</h1>

    <html-block :source="codeSample" />

    <p>
      <email-link to="foo@bar.com">
        foo@bar.com
      </email-link>
    </p>

    <p>
      <email-link
        to="foo@bar.com"
        subject="Hey there"
        :body="'Hi!\n\nJust thought I\'d get in touch and '"
      >
        foo@bar.com with prefilled content
      </email-link>
    </p>

  </div>
</template>
