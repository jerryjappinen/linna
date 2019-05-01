<script>
import formatMachineReadableDate from '../../util/formatMachineReadableDate'

export default {

  data () {
    return {
      renderedDate: formatMachineReadableDate(new Date())
    }
  }

}

</script>

<template>
  <div>

    <h1><code>formatMachineReadableDate(date)</code></h1>

    <js-block source="import formatMachineReadableDate from 'linna/util/formatMachineReadableDate'" />

    <h3>Dependencies</h3>

    <p>
      date-fns
    </p>

    <h3>Example</h3>

    <table>
      <tr>
        <td><code>formatMachineReadableDate(new Date())</code></td>
        <td>{{ renderedDate }}</td>
      </tr>
    </table>

  </div>
</template>
