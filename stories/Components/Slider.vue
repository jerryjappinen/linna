<script>
import Slider from '../../components/Slider'

export default {

  components: {
    Slider
  },

  data () {
    return {
      value: 50
    }
  }

}

</script>

<template>
  <div>

    <h1>Slider</h1>

    <table>
      <tbody>

        <tr>
          <td>
            Default
          </td>
          <td>
            <slider
              :value.sync="value"
            />
          </td>
          <td>
            {{ value }}
          </td>
        </tr>

        <tr>
          <td>
            Disabled
          </td>
          <td>
            <slider
              :value.sync="value"
              :disabled="true"
            />
          </td>
          <td>
            {{ value }}
          </td>
        </tr>

      </tbody>

    </table>

  </div>
</template>

<style lang="scss" scoped>

td {

  &:first-child {
    width: 8em;
  }

  &:last-child {
    width: 4em;
  }

}

</style>
