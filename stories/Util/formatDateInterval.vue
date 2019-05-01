<script>
import formatDateInterval from '../../util/formatDateInterval'

import codeSample from './code/formatDateInterval.txt'

const oldDate1 = new Date('2018-01-01 22:22:22')
const oldDate2 = new Date('2018-01-02 22:22:22')
const oldDate3 = new Date('2018-02-02 22:22:22')
const oldDate4 = new Date('2019-02-02 22:22:22')

export default {

  data () {
    return {
      codeSample,
      oldDate1,
      oldDate2,
      oldDate3,
      oldDate4,
      renderedDateInterval1: formatDateInterval(oldDate1, oldDate2),
      renderedDateInterval2: formatDateInterval(oldDate2, oldDate3),
      renderedDateInterval3: formatDateInterval(oldDate3, oldDate4),
      renderedDateInterval4: formatDateInterval(oldDate1, oldDate4),
      renderedDateInterval5: formatDateInterval(oldDate4, oldDate1)
    }
  }

}

</script>

<template>
  <div>

    <h1><code>formatDateInterval(olderDate, newerDate)</code></h1>

    <js-block source="import formatDateInterval from 'linna/util/formatDateInterval'" />

    <h3>Dependencies</h3>

    <p>
      date-fns
    </p>

    <h3>Example</h3>

    <js-block :source="codeSample" />

    <table>

      <tr>
        <td>{{ renderedDateInterval1 }}</td>
      </tr>

      <tr>
        <td>{{ renderedDateInterval2 }}</td>
      </tr>

      <tr>
        <td>{{ renderedDateInterval3 }}</td>
      </tr>

      <tr>
        <td>{{ renderedDateInterval4 }}</td>
      </tr>

      <tr>
        <td>{{ renderedDateInterval5 }}</td>
      </tr>

    </table>

  </div>
</template>
