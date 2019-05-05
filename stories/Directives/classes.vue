<script>
import classes from '../../directives/classes'
import { normalizeBindingValue } from '../../util/composeClassnamesDirective'

export default {
  name: 'ClassesExample',

  directives: {
    classes
  },

  data () {
    return {
      prefix: 'MyPrefix',
      numberValue: 1,
      stringValue: 'mod',

      value1: 'one',
      value2: 'one two three',
      value3: ['one two three', 'one-two-three', 'three']
    }
  },

  computed: {

    value4 () {
      return {
        'one': true,
        'two': false,
        'three': this.stringValue,
        'four': this.numberValue,
        'one two three': true,
        'one-two-three': false
      }
    }

  },

  methods: {
    normalizeBindingValue
  }

}

</script>

<template>
  <div>

    <h1><code>classes</code> directive</h1>

    <p
      v-classes="value4"
    >
      Like <code>:class</code> but prefixes class names.
    </p>

    <p>
      <input v-model="prefix">
      <input v-model="stringValue">
      <input
        v-model="numberValue"
        type="number"
      >
    </p>

    <table>
      <tbody>

        <tr>
          <td><js-block :source="value1" /></td>
          <td><js-block :source="normalizeBindingValue(value1, prefix)" /></td>
        </tr>

        <tr>
          <td><js-block :source="value2" /></td>
          <td><js-block :source="normalizeBindingValue(value2, prefix)" /></td>
        </tr>

        <tr>
          <td><js-block :source="value3" /></td>
          <td><js-block :source="normalizeBindingValue(value3, prefix)" /></td>
        </tr>

        <tr>
          <td><js-block :source="value4" /></td>
          <td><js-block :source="normalizeBindingValue(value4, prefix)" /></td>
        </tr>

      </tbody>
    </table>

  </div>
</template>
