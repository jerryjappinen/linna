import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import debounce from 'lodash/debounce'
import isDate from 'lodash/isDate'

import windowExists from 'linna-util/windowExists'

const prefix = 'vue-persist-'
const expirationCutoff = 14 // days

// Set a computed property to automatically store in localStorage
// https://vuejs.org/v2/guide/mixins.html
export default {

  data () {
    return {
      persistLoaded: false,
      loadPersistOnCreate: false
    }
  },

  computed: {

    // NOTE: This can be undefined especially for non-components
    persistKey () {
      return this.$options.name
    }

  },

  watch: {

    // Store serialized data into localStorage when it changes (throttled)
    // NOTE: need to use `function` so `this` won't get messed up
    persist: debounce(function (data) {
      if (windowExists()) {
        if (this.persistKey) {

          localStorage.setItem(

            // Key to store value with
            prefix + this.persistKey,

            // Value to store
            JSON.stringify({
              timestamp: new Date(),
              data
            })

          )

        }
      }
    }, 500)

  },

  created () {
    if (this.loadPersistOnCreate) {
      this._loadPersistedData()
    }
  },

  mounted () {
    if (!this.loadPersistOnCreate) {
      this._loadPersistedData()
    }
  },

  methods: {

    _loadPersistedData () {
      if (windowExists()) {
        if (this.persistKey && this.persist) {
          const key = prefix + this.persistKey

          // Load serialized data from localStorage
          // NOTE: this is a synchronous operation, theoretically it might slow things down
          const stored = localStorage.getItem(key)

          if (stored) {
            try {
              const parsed = JSON.parse(stored)

              // We found data in local storage, let's load it up
              if (parsed && parsed.timestamp && parsed.data) {

                // Needs a valid timestamp
                const storedDate = new Date(parsed.timestamp)
                if (isDate(storedDate)) {

                  // Only consider items that aren't too old
                  if (
                    Math.abs(
                      differenceInCalendarDays(storedDate, new Date())
                    ) < expirationCutoff
                  ) {

                    // Pass on the data that was found and fire an event
                    this.persist = parsed.data
                    this.persistLoaded = true
                    this.$emit('persistLoaded', parsed.data)

                  }

                }

              }

              // Remove items if parsing leads to errors
            } catch (error) {

              // FIXME: keeping this here until gated content is testes
              // eslint-disable-next-line no-console
              console.warn(error)

              localStorage.removeItem(key)
            }

          }

          // Emit loaded event with null value
          if (!this.persistLoaded) {
            this.persistLoaded = true
            this.$emit('persistLoaded', null)
          }

        }
      }
    }

  }

}
