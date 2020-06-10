<script>
import formatMachineReadableDateTime from 'linna-util/formatMachineReadableDateTime'

export default {

  data () {
    return {
      renderedDate: formatMachineReadableDateTime(new Date())
    }
  }

}

</script>

<template>
  <div>

    <h1><code>formatMachineReadableDateTime(date)</code></h1>

    <js-block source="import formatMachineReadableDateTime from 'linna-util/formatMachineReadableDateTime'" />

    <h3>Dependencies</h3>

    <p>
      date-fns
    </p>

    <h3>Example</h3>

    <table>
      <tr>
        <td><code>formatMachineReadableDateTime(new Date())</code></td>
        <td>{{ renderedDate }}</td>
      </tr>
    </table>

  </div>
</template>
