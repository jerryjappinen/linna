<script>
import Date from '../../components/Date'
import DateInterval from '../../components/DateInterval'
import Month from '../../components/Month'

export default {

  components: {
    Date,
    DateInterval,
    Month
  }

}

</script>

<template>
  <div class="root">

    <h1>Date components</h1>

    <p>
      Date: <date :date="new Date()" />
    </p>

    <p>
      Date: <date date="2018-01-01 22:22:22" />
    </p>

    <p>
      Date: <date date="2019-02-02 22:22:22" />
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
