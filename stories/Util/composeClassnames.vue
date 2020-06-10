<script>
import composeClassnames from 'linna-util/composeClassnames'

import codeSample from './code/composeClassnames.txt'

export default {

  data () {
    return {
      codeSample,
      prefix: 'Custom prefix',
      hasPrefix: false,

      'foo': true,
      'fooBar': true,
      'bar_foo': true,
      'bar': false
    }
  },

  computed: {

    classnames () {
      return {
        'foo': this['foo'],
        'fooBar': this['fooBar'],
        'bar_foo': this['bar_foo'],
        'bar': this['bar']
      }
    },

    renderedClassnames () {
      return composeClassnames(this.classnames, (this.hasPrefix ? this.prefix : null))
    }

  }

}

</script>

<template>
  <div>

    <h1><code>composeClassnames</code></h1>

    <js-block source="import composeClassnames from 'linna-util/composeClassnames'" />

    <p>
      Compose scoped, kebab-cased classnames easily. Pass component name as prefix to use this effectively in your components.
    </p>

    <js-block :source="codeSample" />

    <h3>Example</h3>

    <input
      v-model="hasPrefix"
      type="checkbox"
    >

    <input
      v-model="prefix"
      type="text"
      placeholder="Custom prefix"
    >

    <button @click="bar = !bar">
      Toggle bar
    </button>

    <p>
      <code>composeClassnames()</code> with
    </p>

    <js-block :source="classnames" />

    <p>
      becomes
    </p>

    <js-block :source="renderedClassnames" />

  </div>
</template>
