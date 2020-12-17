<script>
import FlipSwitch from '../../components/FlipSwitch'

export default {

  components: {
    FlipSwitch
  },

  data () {
    return {
      value: true
    }
  }

}

</script>

<template>
  <div>

    <h1>FlipSwitch</h1>

    <table>
      <tbody>

        <tr>
          <td>on</td>
          <td>
            <flip-switch :value="true" />
          </td>
        </tr>

        <tr>
          <td>off</td>
          <td>
            <flip-switch :value="false" />
          </td>
        </tr>

        <tr>
          <td>on disabled</td>
          <td>
            <flip-switch
              :disabled="true"
              :value="true"
            />
          </td>
        </tr>

        <tr>
          <td>off disabled</td>
          <td>
            <flip-switch
              :disabled="true"
              :value="false"
            />
          </td>
        </tr>

      </tbody>
    </table>

  </div>
</template>
