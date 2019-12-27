<script>
import Buttons from '../../components/Buttons'
import ClickButton from '../../components/ClickButton'

export default {
  components: {
    Buttons,
    ClickButton
  }
}
</script>

<template>
  <div>

    <h1>Buttons</h1>

    <buttons>
      <click-button>Foo</click-button>
      <click-button>Bar</click-button>
    </buttons>

    <buttons :center="true">
      <click-button>Foo</click-button>
      <click-button>Bar</click-button>
    </buttons>

    <buttons :fill="true">
      <click-button>Foo</click-button>
      <click-button>Bar</click-button>
    </buttons>

  </div>
</template>

<style lang="scss" scoped>

.c-click-button {
  background-color: rgba(0, 0, 0, 0.2);
}

</style>
