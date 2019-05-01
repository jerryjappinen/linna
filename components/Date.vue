<script>
import { differenceInDays, formatRelative, isDate } from 'date-fns'

import formatDate from '../util/formatDate'
import formatMachineReadableDate from '../util/formatMachineReadableDate'

export default {
  name: 'Date',

  props: {

    date: {
      type: [String, Date],
      required: true
    },

    absolutePrefix: {
      default: null
    }

  },

  computed: {

    normalizedDate () {
      return isDate(this.date) ? this.date : new Date(this.date)
    },

    diff () {
      return differenceInDays(this.normalizedDate, new Date())
    },

    isRelative () {
      return Math.abs(this.diff) < 6
    },

    machineReadableDateString () {
      return formatMachineReadableDate(this.normalizedDate)
    },

    dateString () {

      if (this.isRelative) {
        return formatRelative(this.normalizedDate, new Date(), {
          weekStartsOn: 1,
          unit: 'hour'
        })
      }

      return formatDate(this.normalizedDate)
    },

    prefix () {

      if (!this.isRelative && this.absolutePrefix) {
        return this.absolutePrefix
      }

      return null
    }

  }

}
</script>

<template>
  <time
    class="c-date"
    :datetime="machineReadableDateString"
  >
    {{ prefix ? prefix + ' ' : '' }}{{ dateString }}
  </time>
</template>
