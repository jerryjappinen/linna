<script>
import ClickButton from '../../components/ClickButton'

export default {

  components: {
    ClickButton
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

    <h1>ClickButton</h1>

    <div class="grid">

      <div>
        <click-button @click="onClick">
          Default
        </click-button>
      </div>

      <div>
        <click-button
          :loading="true"
          @click="onClick"
        >
          Loading
        </click-button>
      </div>

      <div>
        <click-button
          :disabled="true"
          @click="onClick"
        >
          Disabled
        </click-button>
      </div>

      <div>
        <click-button
          :disabled="true"
          :loading="true"
          @click="onClick"
        >
          Disabled loading
        </click-button>
      </div>

      <div>
        <click-button
          icon-left="cross"
          @click="onClick"
        >
          Icon left
        </click-button>
      </div>

      <div>
        <click-button
          icon-right="cross"
          @click="onClick"
        >
          Icon right
        </click-button>
      </div>

      <div>
        <click-button
          icon-left="cross"
          icon-right="cross"
          @click="onClick"
        >
          Two icons
        </click-button>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>

.grid {
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
