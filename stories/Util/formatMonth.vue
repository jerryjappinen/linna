<script>
import formatMonth from 'linna-util/formatMonth'

export default {

  data () {
    return {
      renderedDate: formatMonth(new Date())
    }
  }

}

</script>

<template>
  <div>

    <h1><code>formatMonth(date)</code></h1>

    <js-block source="import formatMonth from 'linna-util/formatMonth'" />

    <h3>Dependencies</h3>

    <p>
      date-fns
    </p>

    <h3>Example</h3>

    <table>
      <tr>
        <td><code>formatMonth(new Date())</code></td>
        <td>{{ renderedDate }}</td>
      </tr>
    </table>

  </div>
</template>
