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
          :block="true"
          @click="onClick"
        >
          Block
        </click-button>
      </div>

      <div>
        <click-button
          :block="true"
          :center="true"
          @click="onClick"
        >
          Block center
        </click-button>
      </div>

      <div>
        <click-button
          :block="true"
          icon-left="cross"
          icon-right="cross"
          @click="onClick"
        >
          Block with icon
        </click-button>
      </div>

      <div>
        <click-button
          :block="true"
          :center="true"
          icon-left="cross"
          icon-right="cross"
          @click="onClick"
        >
          Block center with icon
        </click-button>
      </div>

      <div>
        <click-button
          :block="true"
          loading="true"
          @click="onClick"
        >
          Block loading
        </click-button>
      </div>

      <div>
        <click-button
          href="/"
          @click.prevent="onClick"
        >
          Href with binding
        </click-button>
      </div>

      <div>
        <click-button
          to="/"
          @click="onClick"
        >
          Router link with binding
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
  @include grid-gap(1em, 1em);

  > div {
    border-width: 1px;
  }

}

</style>
