<script>
import DateInterval from '../../components/DateInterval'
import FormattedDate from '../../components/FormattedDate'
import Month from '../../components/Month'

export default {

  components: {
    DateInterval,
    FormattedDate,
    Month
  }

}

</script>

<template>
  <div class="root">

    <h1>Date components</h1>

    <p>
      Date: <formatted-date :date="new Date()" />
    </p>

    <p>
      Date: <formatted-date date="2018-01-01 22:22:22" />
    </p>

    <p>
      Date: <formatted-date date="2019-02-02 22:22:22" />
    </p>

    <h3>Month</h3>

    <p>
      <month :date="new Date()" />
    </p>

    <h3>Date interval</h3>

    <p>
      Same date passed as start and end date: <date-interval
        :start-date="new Date()"
        :end-date="new Date()"
      />
    </p>

    <p>
      Same year and month: <date-interval
        :start-date="new Date('2019-02-01 22:22:22')"
        :end-date="new Date('2019-02-05 22:22:22')"
      />
    </p>

    <p>
      Same year: <date-interval
        :start-date="new Date('2019-03-02 22:22:22')"
        :end-date="new Date('2019-02-02 22:22:22')"
      />
    </p>

    <p>
      <date-interval
        :start-date="new Date('2018-01-01 22:22:22')"
        :end-date="new Date('2019-02-02 22:22:22')"
      />
    </p>

  </div>
</template>
