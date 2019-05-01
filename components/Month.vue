<script>
import { isDate } from 'date-fns'

import formatMonth from '../util/formatMonth'
import formatMachineReadableDate from '../util/formatMachineReadableDate'

export default {
  name: 'Date',

  props: {

    date: {
      type: [String, Date],
      required: true
    }

  },

  computed: {

    normalizedDate () {
      return isDate(this.date) ? this.date : new Date(this.date)
    },

    machineReadableDateString () {
      return formatMachineReadableDate(this.normalizedDate)
    },

    dateString () {
      return formatMonth(this.normalizedDate)
    }

  }

}
</script>

<template>
  <time
    class="c-month"
    :datetime="machineReadableDateString"
  >
    {{ dateString }}
  </time>
</template>
