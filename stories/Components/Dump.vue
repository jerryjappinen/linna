<script>
import Dump from '../../components/Dump'

export default {

  components: {
    Dump
  },

  data () {
    return {
      dump: {
        foo: {},
        bar: 'bar'
      }
    }
  }

}

</script>

<template>
  <div>

    <h1>Dump</h1>

    <dump :value="dump" />

  </div>
</template>
