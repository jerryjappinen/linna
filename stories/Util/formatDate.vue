<script>
import formatDate from 'linna-util/formatDate'

export default {

  data () {
    return {
      renderedDate: formatDate(new Date())
    }
  }

}

</script>

<template>
  <div>

    <h1><code>formatDate(date)</code></h1>

    <js-block source="import formatDate from 'linna-util/formatDate'" />

    <h3>Dependencies</h3>

    <p>
      date-fns
    </p>

    <h3>Example</h3>

    <table>
      <tr>
        <td><code>formatDate(new Date())</code></td>
        <td>{{ renderedDate }}</td>
      </tr>
    </table>

  </div>
</template>
