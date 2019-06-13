<script>
import Flex from '../../components/Flex'
import FlexFixed from '../../components/FlexFixed'
import FlexFluid from '../../components/FlexFluid'

export default {

  components: {
    Flex,
    FlexFixed,
    FlexFluid
  }

}

</script>

<template>
  <div>

    <div class="flex">
      <flex>

        <flex-fixed>
          Foooooo
        </flex-fixed>

        <flex-fluid>
          Foooooo
        </flex-fluid>

      </flex>
    </div>

  </div>
</template>

<style lang="scss" scoped>

.flex {
  div {
    border-width: 1px;
  }
}

</style>
