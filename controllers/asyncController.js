import fill from 'lodash/fill'
import Vue from 'vue'

// import tryPromises from './tryPromises'

// const isPromiseList = (promiseValue) => {
//   if (isArray(promiseValue)) {
//     return true
//   }

//   return false
// }

// const awaitAll = async (promiseValue) => {

//   if (isPromiseList(promiseValue)) {
//     return Promise.all(promiseValue)
//   }

//   return promiseValue
// }

const makeArray = (length) => {
  return fill(Array(length), undefined)
}

const getNonEmptyIndexes = (array) => {
  const indexes = []

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      indexes.push(i)
    }
  }

  return indexes
}

export default () => {
  return new Vue({

    data () {
      return {
        operationCount: 0,
        isCompleted: false,

        forceListMode: false,
        omitErrors: false,

        errors: [],
        promises: [],
        responses: []
      }
    },

    computed: {

      isInListMode () {
        return this.forceListMode || this.promises.length > 1
      },



      isFailed () {
        return this.isCompleted && this.hasErrors
      },

      isSuccess () {
        return this.isCompleted && !this.isFailed
      },

      isLoading () {
        return this.operationCount > 0
      },



      errorIndexes () {
        return getNonEmptyIndexes(this.errors)
      },

      hasErrors () {
        return !!this.errorIndexes.length
      },

      responseIndexes () {
        return getNonEmptyIndexes(this.responses)
      },

      hasResponses () {
        return !!this.responseIndexes.length
      },



      error () {
        return this.hasErrors ? this.errors[this.errorIndexes[0]] : undefined
      },

      response () {
        return this.hasResponses ? this.responses[this.responseIndexes[0]] : undefined
      }

    },

    methods: {

      reset () {
        this.$emit('beforereset')

        if (this.operationCount) {
          this.operationCount = 0
        }

        if (this.isCompleted) {
          this.isCompleted = false
        }

        this.errors = []
        this.promises = []
        this.responses = []

        this.$emit('reset')

        return this
      },

      async send (...promises) {
        if (promises && promises.length) {
          const responseCount = promises.length

          this.operationCount += responseCount

          this.$emit('beforesend')

          // Handle state and custom request callbacks
          try {

            this.promises = promises
            this.errors = makeArray(responseCount)
            this.responses = makeArray(responseCount)

            this.$emit('send')

            // Support omitting errors easily (off by default)
            await Promise.all(
              this.promises.map(async (promise, i) => {

                // Try promise
                try {
                  const response = await promise
                  this.$set(this.responses, i, response)

                } catch (error) {
                  this.$set(this.errors, i, error)
                }

                if (this.operationCount > 0) {
                  this.operationCount--
                }

              })
            )

            if (!this.isCompleted) {
              this.isCompleted = true
            }

            // Simulate Promise.all behavior by throwing an error if any of the requests had errors
            // See exception handling below
            // NOTE: this will wait for all requests to complete before throwing errors, unlike with Promise.all
            if (!this.omitErrors && this.hasErrors) {
              throw new Error('Some operations failed, see errors list for details')
            }



            // Reporting for success

            // Automatically handle one or multiple promises
            const responseValue = this.isInListMode ? this.responses : this.responses[0]

            this.$emit('success', responseValue)
            this.$emit('complete')

            return responseValue



          // Something went wrong
          // NOTE: this error is the one we threw above
          // Our errors list will have the errors for each operation
          } catch (error) {

            // Reporting for failure

            // Automatically handle the case of only one operation
            const responseErrorValue = this.isInListMode ? this.errors : this.errors[0]

            this.$emit('fail', responseErrorValue)
            this.$emit('complete')

            // When in single operation mode, throw the error
            if (!this.isInListMode) {
              throw responseErrorValue
            }

            // We're in list mode, will throw generic error to encourage consumer to use errors
            throw new Error(this.errorIndexes.length + ' operations resulted in errors. Check the error list to handle each error appropriately')
          }
        }

      }
    }

  })
}
