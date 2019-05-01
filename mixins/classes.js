import { kebabCase } from 'lodash'

import composeClassnames from '../util/composeClassnames'

export default {

  computed: {

    classPrefix () {
      return kebabCase('c-' + this.$options.name)
    },

    classes () {
      let classes = [this.classPrefix]

      if (this._classes) {
        classes = classes.concat(
          composeClassnames(this._classes, this.classPrefix)
        )
      }

      return classes
    }
  },

  methods: {
    getClassname (input) {
      if (input) {
        return composeClassnames(
          {
            [input]: true
          },
          this.classPrefix
        )
      }

      return null
    }
  }

}
