<script>
import Click from '../../components/Click'
import LongPress from '../../components/LongPress'
import Set from '../../components/Set'
import Toggle from '../../components/Toggle'

export default {

  components: {
    Click,
    LongPress,
    // eslint-disable-next-line vue/no-unused-components
    Set,
    Toggle
  },

  data () {
    return {
      setValue: 'foo',
      toggleValue: true
    }
  },

  methods: {

    onClick () {
      alert('Click')
    },

    onLongPress () {
      alert('Long press')
    }

  }

}

</script>

<template>
  <div>

    <h1>Controls</h1>

    <p>Thin wrapper components that handle the <code>.control</code> utility classes, prevent selection flicker upon repeated presses and support disabled state.</p>

    <p>
      <click @click="onClick">
        Click
      </click>
    </p>

    <p>
      <long-press
        @click="onClick"
        @long-press="onLongPress"
      >
        LongPress
      </long-press>
    </p>

    <p>
      Toggle:
      <toggle :value.sync="toggleValue">
        {{ toggleValue }}
      </toggle>
    </p>

    <p>
      Set {{ setValue }} to:
      <set
        :value.sync="setValue"
        to="foo"
      >
        foo
      </set>
      /
      <set
        :value.sync="setValue"
        to="bar"
      >
        bar
      </set>
    </p>

  </div>
</template>

<style lang="scss" scoped>

.grid {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1em;

  @include grid;
  @include grid-columns(9);
  @include grid-gap(1em, 1em);
  align-items: center;
  text-align: center;

  .c-click-button {
    // @include flex;
    width: 100%;
  }

}

</style>
