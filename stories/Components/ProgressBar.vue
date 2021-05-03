<script>
import ProgressBar from '../../components/ProgressBar'

export default {
  components: {
    ProgressBar
  }
}
</script>

<template>
  <div>

    <h1>ProgressBar</h1>

    <p>
      Horizontal progress bar.
    </p>

    <table>
      <tbody>

        <tr>
          <td>Default</td>
          <td>
            <progress-bar />
          </td>
        </tr>

        <tr>
          <td>
            <code>:value="50"</code>
          </td>
          <td>
            <progress-bar :value="50" />
          </td>
        </tr>

        <tr>
          <td>
            <code>:value="0.5" :max="1"</code>
          </td>
          <td>
            <progress-bar
              :value="0.5"
              :max="1"
            />
          </td>
        </tr>

        <tr>
          <td>
            <code>:value="2" :min="1" :max="4"</code>
          </td>
          <td>
            <progress-bar
              :value="2"
              :min="1"
              :max="4"
            />
          </td>
        </tr>

        <tr>
          <td>
            <code>:value="5" :min="-10" :max="10"</code>
          </td>
          <td>
            <progress-bar
              :value="5"
              :min="-10"
              :max="10"
            />
          </td>
        </tr>

      </tbody>
    </table>

  </div>
</template>

<style lang="scss" scoped>

</style>
