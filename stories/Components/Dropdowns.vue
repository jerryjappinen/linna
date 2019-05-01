<script>
import Dropdown from '../../components/Dropdown'

export default {

  components: {
    Dropdown
  },

  data () {
    return {
      value: 'fooo',
      options: [
        {
          label: 'Foo',
          value: 'foo'
        },
        {
          label: 'Fooo',
          value: 'fooo',
          disabled: true
        },
        {
          label: 'Bars',
          value: [
            {
              label: 'Bar',
              value: 'bar'
            },
            {
              label: 'Baar',
              value: 'baar'
            },
            {
              label: 'Baaar',
              value: 'baaar',
              disabled: true
            }
          ]
        }
      ]
    }
  }

}

</script>

<template>
  <div>

    <h1>Dropdown</h1>

    <div>
      <dropdown
        :options="options"
        :value.sync="value"
      />
    </div>

  </div>
</template>
