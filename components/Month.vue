<script>
import isDate from 'date-fns/isDate'

import formatMonth from 'linna-util/formatMonth'
import formatMachineReadableDate from 'linna-util/formatMachineReadableDate'

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
