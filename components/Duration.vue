<script>
import { differenceInCalendarDays } from 'date-fns'

import formatDate from '../util/formatDate'

// NOTE: this element might print an empty <span />
// This is intentional:
// - we often don't want to print very short durations (0 or 1 days)
// - But we calculate the diff in this component, so parent won't know whether to render this
// - We could get to not printing anything by using a render function
export default {
  name: 'Duration',

  props: {

    date: {
      type: Date,
      required: true
    },

    endDate: {
      type: Date,
      required: false
    },

    prefix: {
      default: null
    },

    suffix: {
      default: null
    }

  },

  computed: {

    diff () {
      return Math.abs(
        differenceInCalendarDays(
          this.date,
          this.normalizedDate2
        )
      )
    },

    normalizedDate2 () {
      return this.endDate ? this.endDate : new Date()
    },

    detailsString () {

      if (this.diff) {
        const date1 = formatDate(this.date)
        const date2 = formatDate(this.normalizedDate2)
        return date1 + (date1 !== date2 ? ' – ' + date2 : '')
      }

      return null
    },

    dateTimeString () {

      const string = (this.diff ? this.diff : 1) + ' day' + (
        this.diff > 1
          ? 's'
          : ''
      )

      return [
        this.prefix ? this.prefix : '',
        string,
        this.suffix ? this.suffix : ''
      ].join('')
    }

  }

}
</script>

<template>
  <span
    class="c-duration"
    :data-tooltip="detailsString"
  >{{ dateTimeString }}</span>
</template>
