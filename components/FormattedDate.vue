<script>
import differenceInDays from 'date-fns/differenceInDays'
import formatRelative from 'date-fns/formatRelative'
import isDate from 'date-fns/isDate'

import isNumber from 'lodash/isNumber'
import upperFirst from 'lodash/upperFirst'

import formatDate from 'linna-util/formatDate'
import formatMachineReadableDate from 'linna-util/formatMachineReadableDate'

export default {
  name: 'FormattedDate',

  props: {

    date: {
      // NOTE: removing type check due to an issue in Nuxt
      // https://github.com/nuxt/nuxt.js/issues/5565
      // type: [Number, String, Date],
      required: true
    },

    relative: {
      type: Boolean,
      default: true
    },

    absolutePrefix: {
      default: null
    },

    upperFirst: {
      type: Boolean,
      default: false
    }

  },

  computed: {

    normalizedDate () {
      return isDate(this.date)
        ? this.date
        : isNumber(this.date)
          ? new Date(this.date * 1000)
          : new Date(this.date)
    },

    diff () {
      return differenceInDays(this.normalizedDate, new Date())
    },

    isRelative () {
      return this.relative && Math.abs(this.diff) < 6
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

    formattedDateString () {
      return this.upperFirst ? upperFirst(this.dateString) : this.dateString
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
    class="c-formatted-date"
    :datetime="machineReadableDateString"
  >{{ prefix ? prefix + ' ' : '' }}{{ formattedDateString }}</time>
</template>
