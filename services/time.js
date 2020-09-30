import Vue from 'vue'
import requestAnimationFrame from 'raf'

const intervalDuration = 1000

const getDateOnlyDate = (dateAndTime) => {
  return new Date(dateAndTime.toDateString())
}

export default new Vue({

  data () {
    const currentDate = new Date()

    return {
      $_timer: null,
      current: currentDate,

      // This only changes when date changes
      // You can listen to this without getting an update every second
      currentDate: getDateOnlyDate(currentDate)
    }
  },

  watch: {

    current (currentTime) {
      const newDate = getDateOnlyDate(currentTime)

      if (newDate.getTime() !== this.currentDate.getTime()) {
        this.currentDate = newDate
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
