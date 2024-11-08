<script>
import isArray from 'lodash/isArray'
import isNaN from 'lodash/isNaN'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'

import Fade from './Fade'
import Icon from './Icon'

export default {
  name: 'Textfield',

  components: {
    Fade,
    Icon
  },

  props: {

    labelId: {
      default: null
    },

    icon: {
      type: String,
      default: null
    },

    type: {
      default: 'text'
    },

    clear: {
      default: false
    },

    undo: {
      default: false
    },

    name: {
      type: String,
      default: null
    },

    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#inappropriate-for-the-control
    autocomplete: {
      default: null
    },

    multiline: {
      default: false
    },

    placeholder: {
      type: String
    },

    value: {
      type: [String, Number],
      required: true
    },

    required: {
      default: false
    },

    max: {
      default: null
    },

    min: {
      default: null
    },

    pattern: {
      default: null
    },

    hex: {
      default: null
    },

    inline: {
      default: false
    },

    disabled: {
      default: false
    },

    ariaLabel: {
      default: undefined
    }

  },

  data () {
    let originalValue = ''

    if (isString(this.value)) {
      originalValue += this.value

    } else if (isNumber(this.value)) {
      originalValue = 0 + this.value
    }

    return {
      isFocused: false,
      originalValue
    }
  },

  computed: {

    ownValue: {
      get () {
        return this.value
      },
      set (value) {

        if (this.type === 'number') {
          const parsed = parseFloat(value)

          if (isNumber(parsed) && !isNaN(parsed)) {
            return this.$emit('update:value', parsed)
          }
        }

        return this.$emit('update:value', value)
      }
    },

    isEmpty () {
      return !(this.ownValue && this.ownValue.length)
    },

    hasUndo () {
      return !!(this.undo || isNumber(this.undo) || isString(this.undo))
    },

    undoValue () {
      if (isNumber(this.undo) || isString(this.undo)) {
        return this.undo
      }
      return this.originalValue
    },

    normalizedAutocomplete () {
      let autocomplete = this.autocomplete

      if (isArray(autocomplete)) {
        autocomplete = autocomplete.join(' ')
      }

      return autocomplete
    },

    bindings () {
      const attributes = {}

      if (this.labelId) {
        attributes.id = this.labelId
      }

      return attributes
    },

    inputBindings () {
      const attributes = {}

      if (this.labelId) {
        attributes.id = this.labelId
      }

      if (this.max) {
        attributes[this.type === 'text' ? 'maxlength' : 'max'] = this.max
      }

      if (this.min) {
        attributes[this.type === 'text' ? 'minlength' : 'min'] = this.min
      }

      if (this.pattern) {
        attributes.pattern = this.pattern
      } else if (this.hex) {
        // https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
        attributes.pattern = '(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)'
      }

      return attributes
    }

  },

  methods: {

    focus () {
      this.$refs.input.focus()
    },

    blur () {
      this.$refs.input.blur()
    },

    onFocus (event) {
      this.isFocused = true
      this.$emit('focus', event)
    },

    onBlur (event) {
      this.isFocused = false
      this.$emit('blur', event)
    },

    selectAll () {
      this.$refs.input.select()
    },

    clearValue () {
      this.ownValue = ''
    },

    onClearClick () {
      this.clearValue()
      this.focus()
    },

    onUndoClick () {
      this.ownValue = this.undoValue
    },

    onEsc (event) {
      this.$emit('cancel', event)
      this.blur()
    }

  }
}
</script>

<template>
  <span
    class="c-textfield"
    :class="{
      ['c-textfield-' + (icon || '')]: !!icon,
      'c-textfield-inline': !!inline,
      'c-textfield-block': !inline,
      'c-textfield-multiline': !!multiline,
      'c-textfield-not-multiline': !multiline,
      'c-textfield-has-icon': !!icon,
      'c-textfield-empty': isEmpty,
      'c-textfield-filled': !isEmpty,
      'c-textfield-focused': isFocused,
      'c-textfield-disabled': disabled
    }"
  >

    <textarea
      v-if="multiline"
      ref="input"
      v-model="ownValue"
      v-bind="bindings"
      :name="name"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :required="!!required"
      :disabled="!!disabled"
      :aria-label="ariaLabel"
      class="c-textfield-input"
      @focus="onFocus"
      @blur="onBlur"
      @keyup.esc="onEsc"
    />

    <input
      v-else
      ref="input"
      v-model="ownValue"
      v-bind="{
        ...bindings,
        ...inputBindings
      }"
      :type="type"
      :name="name"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :required="!!required"
      :disabled="!!disabled"
      :aria-label="ariaLabel"
      class="c-textfield-input"
      @focus="onFocus"
      @blur="onBlur"
      @keyup.esc="onEsc"
    >

    <icon
      v-if="icon"
      :src="icon"
      class="c-textfield-icon"
    />

    <template v-if="clear && !multiline">

      <fade>
        <span
          v-if="!isEmpty"
          class="c-textfield-button c-textfield-clear"
          @click="onClearClick"
        >
          <icon src="cross" />
        </span>
      </fade>

    </template>

    <template v-else-if="hasUndo && !multiline">

      <fade>
        <span
          v-if="!isEmpty && ownValue !== undoValue"
          class="c-textfield-button c-textfield-undo"
          @click="onUndoClick"
        >
          <icon src="undo" />
        </span>
      </fade>

    </template>

  </span>
</template>

<style lang="scss">

.c-textfield {
  @include relative;
}

.c-textfield-inline {
  @include inline-block;
}

.c-textfield-block {
  @include block;
}

.c-textfield-button,
.c-textfield-icon {
  @include block;
  @include absolute;
  z-index: 2;
  width: 1em;
  height: 1em;
  line-height: 1;

  @include transform-from-top-center;
  @include transition-properties-common;
}

.c-textfield-icon {
  color: $grey;
  left: 0;
  @include transition-slow;
}

.c-textfield-button {
  @include pointer;
  @include round;
  right: 0.4em;
  padding: 0.25em;

  @include transition-hover-active;

  .c-vector {
    @include block;
  }

  &:active {
    transform: translateY(2px);
  }

}

.c-textfield-multiline {
  .c-textfield-button,
  .c-textfield-icon {
    top: $pad-loose-vertical;
  }
}

.c-textfield-not-multiline {
  .c-textfield-button,
  .c-textfield-icon {
    top: 50%;
    transform: translateY(-50%);
  }

  .c-textfield-button {

    &:focus,
    &:hover {
      transform: translateY(-50%);
    }

    &:active {
      transform: translateY(-45%);
    }

  }

}

.c-textfield-filled {
  .c-textfield-icon {
    color: inherit;
    @include transition-fast;
  }
}



.c-textfield-input {
  @include relative;
  @include border-box;
  @include inherit-cursor;
  width: 100%;
  // outline: 0;
  z-index: 1;
  border-width: 0;
  line-height: inherit;
  background-color: transparent;

  @include transition-medium;
  @include transition-properties-common;

  &::placeholder {
    color: $default-discreet-text-color;
    text-decoration: underline;
    text-decoration-color: transparent;

    @include transition-fast;
    @include transition-properties-common;
  }

  &:focus {
    + .c-textfield-icon {
      transform: scale(1) translateY(-50%);
    }
  }

  &:focus,
  &:hover {
    @include transition-fast;

    + .c-textfield-icon {
      @include transition-fast;
      color: inherit;
    }
  }

  &:hover {
    &:not(:focus) {
      opacity: 0.5;
    }
  }

}

.c-textfield-has-icon {
  .c-textfield-input {
    padding-left: calc(#{$pad-tight-horizontal} + 1em);
  }
}

</style>
