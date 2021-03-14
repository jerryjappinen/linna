<script>
import gamepads from '../../services/gamepads'

export default {

  computed: {

    gamepadInputs () {
      return gamepads.firstConnectedGamepadInputs || gamepads.inputs[0]
    },

    dump () {
      return {
        mainLoopId: gamepads.mainLoopId,
        mainLoopStartTimestamp: gamepads.mainLoopStartTimestamp,
        mainLoopElapsed: gamepads.mainLoopElapsed
      }
    }

  }

}

</script>

<template>
  <div class="root">

    <h1>Gamepads service</h1>

    <js-block source="import gamepads from 'linna/services/gamepads'" />

    <p>
      Easy way to access gamepad support, with some heavy lifting and math already done for you.
    </p>

    <js-block :source="dump" />

    <div class="buttons">
      <div
        v-for="(value, key) in gamepadInputs"
        :key="key"
        :class="{
          'button-pressed': !!value,
          'button-not-pressed': !value
        }"
        :style="{
          backgroundColor: 'rgba(0, 0, 0, ' + Math.abs(value * 0.5) + ')'
        }"
        class="button"
      >
        {{ key }}: {{ value }}
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

.buttons {
  display: flex;
  flex-wrap: wrap;
}

.button {
  padding: 0.5em;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
  width: 25%;
  box-sizing: border-box;
}

.button-not-pressed {
  opacity: 0.5;
}

.button-pressed {
  border-color: #666;
}

</style>
