import Vue from 'vue'

import gamepadIsSupported from 'linna-util/gamepadIsSupported'
import getGamepads from 'linna-util/getGamepads'



// Math

const getNormalizedStickPosition = (rawValue, innerDeadzone, outerDeadzone) => {
  const min = innerDeadzone
  const max = 1 - outerDeadzone

  const multiplier = rawValue < 0 ? -1 : 1

  return multiplier * (Math.max(0, (Math.abs(rawValue) - min)) / max)
}

const getDirection = (x, y) => {
  if (!x && !y) {
    return null
  }

  return 180 - ((Math.atan2(x, y) * 180) / Math.PI)
}

const getCompassDirection = (degrees) => {
  if (degrees || degrees === 0) {
    return Math.round(degrees / 90)
  }

  return null
}

const getDiagonalDirection = (degrees) => {
  if (degrees || degrees === 0) {
    return Math.round(degrees / 45)
  }

  return null
}

// NOTE: this is not exact for all controllers as their shapes can vary
// We won't let this go above 1 but it's not perfect on an Xbox controller at 45 deg
const getStickIntensity = (x, y) => {
  return Math.min(1, Math.sqrt((x * x) + (y * y)))
}

const getDPadDiagonalDirection = (up, down, left, right) => {

  if (up) {
    return right
      ? 1
      : left
        ? 7
        : 0
  }

  if (down) {
    return right
      ? 3
      : left
        ? 5
        : 4
  }

  return right
    ? 2
    : left
      ? 6
      : null
}



// Misc

const normalizeButtonValue = (buttonState) => {
  return buttonState.value || (buttonState.pressed ? 1 : 0)
}

const getInputDataPlaceholder = () => {
  return {
    leftStickX: 0,
    leftStickY: 0,
    leftStickIntensity: 0,
    leftStickDirection: null,
    leftStickCompassDirection: null,
    leftStickDiagonalDirection: null,

    rightStickX: 0,
    rightStickY: 0,
    rightStickIntensity: 0,
    rightStickDirection: null,
    rightStickCompassDirection: null,
    rightStickDiagonalDirection: null,

    faceButtonA: 0,
    faceButtonX: 0,
    faceButtonY: 0,
    faceButtonB: 0,

    dPadUp: 0,
    dPadDown: 0,
    dPadLeft: 0,
    dPadRight: 0,

    dPadDirection: null,
    dPadCompassDirection: null,
    dPadDiagonalDirection: null,

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

const getInputData = (gamepad, {
  leftStickInnerDeadzone,
  leftStickOuterDeadzone,
  rightStickInnerDeadzone,
  rightStickOuterDeadzone
}) => {
  const leftStickX = getNormalizedStickPosition(gamepad.axes[0], leftStickInnerDeadzone, leftStickOuterDeadzone)
  const leftStickY = getNormalizedStickPosition(gamepad.axes[1], leftStickInnerDeadzone, leftStickOuterDeadzone)
  const leftStickDirection = getDirection(leftStickX, leftStickY)

  const rightStickX = getNormalizedStickPosition(gamepad.axes[2], rightStickInnerDeadzone, rightStickOuterDeadzone)
  const rightStickY = getNormalizedStickPosition(gamepad.axes[3], rightStickInnerDeadzone, rightStickOuterDeadzone)
  const rightStickDirection = getDirection(rightStickX, rightStickY)

  const dPadUp = normalizeButtonValue(gamepad.buttons[12])
  const dPadDown = normalizeButtonValue(gamepad.buttons[13])
  const dPadLeft = normalizeButtonValue(gamepad.buttons[14])
  const dPadRight = normalizeButtonValue(gamepad.buttons[15])

  const dPadDiagonalDirection = getDPadDiagonalDirection(dPadUp, dPadDown, dPadLeft, dPadRight)

  return {
    leftStickX,
    leftStickY,
    leftStickIntensity: getStickIntensity(leftStickX, leftStickY),
    leftStickDirection,
    leftStickCompassDirection: getCompassDirection(leftStickDirection),
    leftStickDiagonalDirection: getDiagonalDirection(leftStickDirection),

    rightStickX,
    rightStickY,
    rightStickIntensity: getStickIntensity(rightStickX, rightStickY),
    rightStickDirection,
    rightStickCompassDirection: getCompassDirection(rightStickDirection),
    rightStickDiagonalDirection: getDiagonalDirection(rightStickDirection),

    faceButtonA: normalizeButtonValue(gamepad.buttons[0]),
    faceButtonX: normalizeButtonValue(gamepad.buttons[2]),
    faceButtonY: normalizeButtonValue(gamepad.buttons[3]),
    faceButtonB: normalizeButtonValue(gamepad.buttons[1]),

    dPadUp,
    dPadDown,
    dPadLeft,
    dPadRight,

    dPadDirection: dPadDiagonalDirection * 45,
    dPadCompassDirection: Math.floor(dPadDiagonalDirection / 2),
    dPadDiagonalDirection,

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



// Service

const defaultDeadZone = 0.15

export default new Vue({

  data () {
    return {
      isSupported: false,
      gamepads: [],

      mainLoopId: null,
      mainLoopStartTimestamp: 0,
      mainLoopElapsed: 0,

      // NOTE: would be more powerful to set this per controller
      settings: {
        leftStickInnerDeadzone: defaultDeadZone,
        leftStickOuterDeadzone: defaultDeadZone,
        rightStickInnerDeadzone: defaultDeadZone,
        rightStickOuterDeadzone: defaultDeadZone
      },

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
        const newInputValues = getInputData(this.gamepads[i], this.settings)

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
