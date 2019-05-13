<script>
import PhoneNumber from '../../components/PhoneNumber'

import codeSample from './code/PhoneNumber.txt'

export default {

  components: {
    PhoneNumber
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

    <h1>PhoneNumber</h1>

    <html-block :source="codeSample" />

    <p>
      <phone-number tel="+4912345678">
        +49 1234 56 78
      </phone-number>
    </p>

    <p>
      <phone-number sms="+4912345678">
        Text us at +49 1234 56 78
      </phone-number>
    </p>

    <p>
      <phone-number
        sms="+4912345678"
        body="Hi! Saw your web site, can you call me to get in touch?"
      >
        Chat with us
      </phone-number>
    </p>

  </div>
</template>
