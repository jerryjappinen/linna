<script>
import getDomain from '../../util/getDomain'

const url = 'https://foo.bar.com:8080/video/sadkhehsdaksd?thisnadthat=123&foo=bar'

export default {

  data () {
    return {
      domain: getDomain(url),
      url
    }
  }

}

</script>

<template>
  <div>

    <h1><code>getDomain(url)</code></h1>

    <js-block source="import getDomain from 'linna/util/getDomain'" />

    <table>
      <tbody>
        <tr>
          <td>
            <code>
              getDomain('{{ url }}')
            </code>
          </td>
          <td>{{ domain }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
