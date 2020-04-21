<script>
import { isArray, isPlainObject } from 'lodash'

import ownValue from '../mixins/ownValue'

import Icon from './Icon'

export default {
  name: 'Dropdown',

  components: {
    Icon
  },

  mixins: [ownValue],

  props: {

    // [
    //   {
    //     label: 'Foo Bar'
    //     value: 'foobar'
    //   },
    //   {
    //     label: 'Group'
    //     value: [
    //       {
    //         ...
    //       }
    //     ]
    //   }
    // ]

    options: {
      type: Array,
      required: true
    },

    value: {
      required: true
    },

    disabled: {
      default: false
    }

  },

  computed: {

    normalizedOptions () {
      return this.options.map((option) => {

        if (isPlainObject(option)) {
          return option
        }

        // If only values was passed as strings, use them also as labels
        return {
          label: option,
          value: option
        }
      })
    }

  },

  methods: {

    optionIsGroup (option) {
      return isArray(option.value)
    }

  }

}
</script>

<template>
  <span
    class="c-dropdown"
    :class="{
      'c-dropdown-disabled': !!disabled,
      'c-dropdown-inline': !!inline,
      'c-dropdown-block': !inline
    }"
  >

    <select
      v-model="ownValue"
      :disabled="!!disabled"
      class="c-dropdown-select"
    >

      <template v-for="(option, i) in normalizedOptions">

        <!-- Nested group -->
        <optgroup
          v-if="optionIsGroup(option)"
          :key="i"
          :label="option.label"
        >

          <option
            v-for="(groupOption, j) in option.value"
            :key="j"
            :value="groupOption.value"
          >
            {{ groupOption.label }}
          </option>

        </optgroup>

        <!-- Value directly in the list -->
        <option
          v-else
          :key="i"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>

      </template>

    </select>

    <icon
      class="c-dropdown-icon"
      src="chevron-down"
    />

  </span>
</template>

<style lang="scss">

.c-dropdown,
.c-dropdown-select,
.c-dropdown-icon {
  @include relative;
}

.c-dropdown {
  @include pointer;
}

.c-dropdown-block {
  @include block;
}

.c-dropdown-select {
  @include border-box;
  @include block;
  @include pointer;
  width: 100%;
  padding-right: 2em;
  margin-right: -1em;
  z-index: 1;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::-ms-expand {
    display: none;
  }

}

.c-dropdown-icon {
  @include absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 2;
  pointer-events: none;
}

.c-dropdown-select,
.c-dropdown-icon {
  @include transition-fast;
  @include transition-properties-common;
}

</style>
