<script>
import getNameFromEmail from 'linna-util/getNameFromEmail'

export default {

  data () {
    return {
      testStrings: [
        '',
        '.com',
        '@',
        'foo',
        'foo@',
        'foo.bar@',
        'foo.bar@something',
        'foo.bar@something.',
        'foo.bar@something.com'
      ]
    }
  },

  computed: {

    names () {
      const names = {}

      this.testStrings.forEach((testString) => {
        names[testString] = getNameFromEmail(testString)
      })

      return names
    }

  }

}

</script>

<template>
  <div>

    <h1><code>getNameFromEmail(email)</code></h1>

    <table>
      <tbody>
        <tr
          v-for="(name, email) in names"
          :key="email"
        >
          <td><code>getNameFromEmail({{ email }})</code></td>
          <td>{{ typeof name }}</td>
          <td>{{ name }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
