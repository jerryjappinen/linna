<script>
import formatSlug from 'linna-util/formatSlug'

export default {

  data () {
    return {
      renderedSlug: formatSlug('Foo bar')
    }
  }

}

</script>

<template>
  <div>

    <h1><code>formatSlug(string)</code></h1>

    <js-block source="import formatSlug from 'linna-util/formatSlug'" />

    <table>
      <tr>
        <td>Foo bar</td>
        <td>{{ renderedSlug }}</td>
      </tr>
    </table>

  </div>
</template>
