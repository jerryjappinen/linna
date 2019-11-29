<script>
import DateInterval from '../../components/DateInterval'
import Duration from '../../components/Duration'
import FormattedDate from '../../components/FormattedDate'
import LiveDuration from '../../components/LiveDuration'
import Month from '../../components/Month'

export default {

  components: {
    DateInterval,
    Duration,
    FormattedDate,
    LiveDuration,
    Month
  }

}

</script>

<template>
  <div class="root">

    <h1>Date components</h1>

    <h3>
      <code>FormattedDate</code>
    </h3>

    <table>

      <tr>
        <td>Date</td>
        <td><formatted-date :date="new Date()" /></td>
      </tr>

      <tr>
        <td>Date</td>
        <td><formatted-date date="2018-01-01 22:22:22" /></td>
      </tr>

      <tr>
        <td>Date</td>
        <td><formatted-date date="2019-02-02 22:22:22" /></td>
      </tr>

    </table>



    <h3>
      <code>Month</code>
    </h3>

    <table>

      <tr>
        <td>Month</td>
        <td><month :date="new Date()" /></td>
      </tr>

    </table>



    <h3>
      <code>DateInterval</code>
    </h3>

    <table>

      <tr>
        <td>Same date passed as start and end date</td>
        <td>
          <date-interval
            :start-date="new Date()"
            :end-date="new Date()"
          />
        </td>
      </tr>

      <tr>
        <td>Same year and month</td>
        <td>
          <date-interval
            :start-date="new Date('2019-02-01 22:22:22')"
            :end-date="new Date('2019-02-05 22:22:22')"
          />
        </td>
      </tr>

      <tr>
        <td>Same year</td>
        <td>
          <date-interval
            :start-date="new Date('2019-03-02 22:22:22')"
            :end-date="new Date('2019-02-02 22:22:22')"
          />
        </td>
      </tr>

      <tr>
        <td>Different year</td>
        <td>
          <date-interval
            :start-date="new Date('2018-01-01 22:22:22')"
            :end-date="new Date('2019-02-02 22:22:22')"
          />
        </td>
      </tr>

    </table>



    <h3>
      <code>Duration</code>
    </h3>

    <table>

      <tr>
        <td>Duration to current time</td>
        <td>
          <duration :date="new Date('2019-11-29 02:22:22')" />
        </td>
      </tr>

      <tr>
        <td>Duration between two dates</td>
        <td>
          <duration
            :date="new Date('2018-01-01 22:22:22')"
            :end-date="new Date('2019-02-02 22:22:22')"
          />
        </td>
      </tr>

      <tr>
        <td>Future</td>
        <td>
          <duration :date="new Date('2021-01-01 22:22:22')" />
        </td>
      </tr>

      <tr>
        <td>With custom formatting</td>
        <td>
          <duration
            :date="new Date('2018-01-01 22:22:22')"
            prefix="about "
            suffix=" ago"
          />
        </td>
      </tr>

    </table>



    <h3>
      <code>LiveDuration</code>
    </h3>

    <table>

      <tr>
        <td>Live duration to current time</td>
        <td>
          <live-duration :date="new Date('2019-11-29 02:22:22')" />
        </td>
      </tr>

    </table>

  </div>
</template>
