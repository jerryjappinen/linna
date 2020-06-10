<script>
import isAbsoluteUrl from 'linna-util/isAbsoluteUrl'

export default {

  data () {
    return {
      urls: [
        'http://foo.bar',
        'https://foo.bar',
        'ftp://foo.bar',
        '//foo.bar',
        '/foo.bar',
        '/myapp.com',
        'myapp.com',
        '/path',
        'path'
      ]
    }
  },

  methods: {
    isAbsoluteUrl
  }

}

</script>

<template>
  <div>

    <h1><code>isAbsoluteUrl(urlString)</code></h1>

    <js-block source="import isAbsoluteUrl from 'linna-util/isAbsoluteUrl'" />

    <table>
      <tbody>
        <tr
          v-for="(url, i) in urls"
          :key="i"
        >
          <td><code>isAbsoluteUrl('{{ url }}')</code></td>
          <td><code>{{ isAbsoluteUrl(url) }}</code></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
