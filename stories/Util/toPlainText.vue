<script>
import toPlainText from 'linna-util/toPlainText'

export default {

  data () {
    return {
      demo1: '# Foo\n\nBar foo',
      demo2: '<h1>Foo</h1>\n<p>Bar <strong>foo</strong></p>'
    }
  },

  computed: {

    demo1plain () {
      return toPlainText(this.demo1)
    },

    demo2plain () {
      return toPlainText(this.demo2)
    }

  }

}

</script>

<template>
  <div>

    <h1><code>toPlainText(string)</code></h1>

    <js-block source="import toPlainText from 'linna-util/toPlainText'" />

    <table>
      <tr>
        <td><markdown-block :source="demo1" /></td>
        <td>{{ demo1plain }}</td>
      </tr>
      <tr>
        <td><html-block :source="demo2" /></td>
        <td>{{ demo2plain }}</td>
      </tr>
    </table>

  </div>
</template>
