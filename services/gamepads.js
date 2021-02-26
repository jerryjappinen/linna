import Vue from 'vue'

import gamepadIsSupported from 'linna-util/gamepadIsSupported'
import getGamepads from 'linna-util/getGamepads'

const normalizeButtonValue = (buttonState) => {
  return buttonState.value || (buttonState.pressed ? 1 : 0)
}

const getInputDataPlaceholder = () => {
  return {
    leftStickX: 0,
    leftStickY: 0,
    rightStickX: 0,
    rightStickY: 0,

    faceButtonA: 0,
    faceButtonX: 0,
    faceButtonY: 0,
    faceButtonB: 0,

    dPadLeft: 0,
    dPadRight: 0,
    dPadUp: 0,
    dPadDown: 0,

    leftTrigger: 0,
    rightTrigger: 0,

    leftBumper: 0,
    rightBumper: 0,

    leftStickButton: 0,
    rightStickButton: 0,

    select: 0,
    start: 0,

    vendor: 0
  }
}

const getInputData = (gamepad) => {
  return {
    leftStickX: gamepad.axes[0],
    leftStickY: gamepad.axes[1],
    rightStickX: gamepad.axes[2],
    rightStickY: gamepad.axes[3],

    faceButtonA: normalizeButtonValue(gamepad.buttons[0]),
    faceButtonX: normalizeButtonValue(gamepad.buttons[2]),
    faceButtonY: normalizeButtonValue(gamepad.buttons[3]),
    faceButtonB: normalizeButtonValue(gamepad.buttons[1]),

    dPadLeft: normalizeButtonValue(gamepad.buttons[14]),
    dPadRight: normalizeButtonValue(gamepad.buttons[15]),

    dPadUp: normalizeButtonValue(gamepad.buttons[12]),
    dPadDown: normalizeButtonValue(gamepad.buttons[13]),

    leftTrigger: normalizeButtonValue(gamepad.buttons[6]),
    rightTrigger: normalizeButtonValue(gamepad.buttons[7]),

    leftBumper: normalizeButtonValue(gamepad.buttons[4]),
    rightBumper: normalizeButtonValue(gamepad.buttons[5]),

    leftStickButton: normalizeButtonValue(gamepad.buttons[10]),
    rightStickButton: normalizeButtonValue(gamepad.buttons[11]),

    select: normalizeButtonValue(gamepad.buttons[8]),
    start: normalizeButtonValue(gamepad.buttons[9]),

    vendor: normalizeButtonValue(gamepad.buttons[16])
  }
}

export default new Vue({

  data () {
    return {
      isSupported: false,
      gamepads: [],

      mainLoopId: null,
      mainLoopStartTimestamp: 0,
      mainLoopElapsed: 0,

      inputs: [
        getInputDataPlaceholder(),
        getInputDataPlaceholder(),
        getInputDataPlaceholder(),
        getInputDataPlaceholder()
      ]
    }
  },

  computed: {

    connectedGamepads () {
      const connectedGamepads = []

      for (let i = 0; i < this.gamepads.length; i++) {
        if (this.gamepads[i]) {
          connectedGamepads.push(this.gamepads[i])
        }
      }


      return connectedGamepads
    },

    connectedGamepadIndices () {
      return this.connectedGamepads.map((gamepad) => {
        return gamepad.index
      })
    },

    firstConnectedGamepad () {
      return this.connectedGamepads[0] || null
    },

    firstConnectedGamepadInputs () {
      return this.inputs[this.connectedGamepadIndices[0]] || null
    },

    hasConnectedGamepads () {
      return !!this.firstConnectedGamepad
    }

  },

  created () {
    if (gamepadIsSupported()) {
      this.isSupported = true

      this.updateGamepadList()
      this.bindEventListeners()
    }
  },

  beforeDestroy () {
    this.updateGamepadList()
    this.unbindEventListeners()
  },

  methods: {

    updateGamepadList () {
      this.gamepads = getGamepads()
    },

    updateInputValues (timestamp) {
      this.connectedGamepadIndices.forEach((i) => {
        const newInputValues = getInputData(this.gamepads[i])

        // Update only changed values
        for (const inputKey in newInputValues) {
          if (this.inputs[i][inputKey] !== newInputValues[inputKey]) {
            this.inputs[i][inputKey] = newInputValues[inputKey]
          }
        }

      })
    },

    // Bindings

    bindEventListeners () {
      window.addEventListener('gamepadconnected', this.onGamepadConnected)
      window.addEventListener('gamepaddisconnected', this.onGamepadDisconnected)
    },

    unbindEventListeners () {
      window.removeEventListener('gamepadconnected', this.onGamepadConnected)
      window.removeEventListener('gamepaddisconnected', this.onGamepadDisconnected)
    },

    // Event callbacks
    onGamepadConnected () {
      this.updateGamepadList()

      if (this.hasConnectedGamepads && !this.mainLoopId) {
        this.startMainLoop()
      }
    },

    onGamepadDisconnected () {
      this.updateGamepadList()

      if (!this.hasConnectedGamepads && this.mainLoopId) {
        this.endMainLoop()
      }
    },

    // Main loop

    startMainLoop () {
      this.mainLoopId = window.requestAnimationFrame(this.onMainLoopFrame)
    },

    endMainLoop () {
      if (this.mainLoopId) {
        window.cancelAnimationFrame(this.mainLoopId)
        this.mainLoopId = null
      }

      this.mainLoopStartTimestamp = 0
      this.mainLoopElapsed = 0
    },

    onMainLoopFrame (timestamp) {
      this.updateGamepadList()

      // First frame
      if (!this.mainLoopStartTimestamp) {
        this.mainLoopStartTimestamp = timestamp

        // Consecutive frames
      } else {
        this.mainLoopElapsed = timestamp - this.mainLoopStartTimestamp
      }

      // Frame routine
      this.updateInputValues()

      this.mainLoopId = window.requestAnimationFrame(this.onMainLoopFrame)
    }

  }

})
