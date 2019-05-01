<script>
import Animation from '../../components/Animation'
import Spin from '../../components/Spin'

import codeSample from './code/Animation.txt'

export default {

  components: {
    Animation,
    Spin
  },

  data () {
    return {
      codeSample
    }
  }

}

</script>

<template>
  <div>

    <h1>Animation</h1>

    <p>
      Easily play CSS animations by wrapping your element in this component. You can define the <code>@keyframes</code> globally or in a scoped component.
    </p>

    <p>
      This is useful for writing more animation components to play predefined animations without having to write any CSS.
    </p>

    <p class="spin-demo">
      <spin>
        <div>
          Foo
        </div>
      </spin>
    </p>

    <animation
      :name="'color-test-animation' + '-' + $options._scopeId"
      :duration="10 * 1000"
    >
      <div class="animated">
        This background color is animated
      </div>
    </animation>

    <html-block :source="codeSample" />

  </div>
</template>

<style lang="scss" scoped>

.spin-demo {
  width: 4em;
  text-align: center;

  div {
    background-color: lightblue;
  }

}

@keyframes color-test-animation {

  0%,
  100% {
    background-color: green;
  }

  25% {
    background-color: purple;
  }

  50% {
    background-color: cyan;
  }

  75% {
    background-color: red;
  }

}

.animated {
  color: white;
}

</style>
