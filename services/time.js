import Vue from 'vue'
import requestAnimationFrame from 'raf'

const intervalDuration = 1000

const getDateOnlyDate = (dateAndTime) => {
  return new Date(dateAndTime.toDateString())
}

const getHour = (date) => {
  return date.getHours()
}

const getMinutes = (date) => {
  return date.getMinutes()
}

export default new Vue({

  data () {
    const currentDate = new Date()

    return {
      $_timer: null,
      current: currentDate,

      // This only changes when date changes
      // You can listen to this without getting an update every second
      currentMinutes: getMinutes(currentDate),
      currentHour: getHour(currentDate),
      currentDate: getDateOnlyDate(currentDate)
    }
  },

  watch: {

    current (currentTime) {
      const newMinutes = getMinutes(currentTime)
      const newHour = getHour(currentTime)
      const newDate = getDateOnlyDate(currentTime)

      // Minute changed
      if (this.currentMinutes !== newMinutes) {
        this.currentMinutes = newMinutes

        // Hour changed
        if (this.currentHour !== newHour) {
          this.currentHour = newHour

          // Day changed
          if (this.currentDate.getTime() !== newDate.getTime()) {
            this.currentDate = newDate
          }
        }
      }
    }

  },

  created () {
    this.$_onTimerUpdate()
    this.$_startTimer()
  },

  beforeDestroy () {
    this.$_stopTimer()
  },

  methods: {

    $_setCurrentTime () {
      this.current = new Date()
    },

    $_onTimerUpdate () {
      requestAnimationFrame(this.$_setCurrentTime)
    },

    $_startTimer () {
      this.$_stopTimer()
      this.$_onTimerUpdate()
      this.$_timer = setInterval(this.$_onTimerUpdate, intervalDuration)
    },

    // NOTE: `current` will keep the last time but won't be updated
    $_stopTimer () {
      if (this.$_timer) {
        clearInterval(this.$_timer)
        this.$_timer = null
      }
    }

  }

})
