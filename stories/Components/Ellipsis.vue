<script>
import Ellipsis from '../../components/Ellipsis'

export default {

  components: {
    Ellipsis
  }

}

</script>

<template>
  <div>
    <div class="flex">
      <div><ellipsis /></div>
      <div><ellipsis /></div>
      <div><ellipsis /></div>
      <div><ellipsis /></div>
      <div><ellipsis /></div>
      <div><ellipsis :loading="false" /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.flex {
  display: flex;
}

div {

  + div {
    margin-left: 1em;
  }

  &:nth-child(2) {
    color: green;
  }

  &:nth-child(3) {
    color: blue;
  }

  &:nth-child(4) {
    color: grey;
  }

  &:nth-child(5) {
    color: lightblue;
  }

}

</style>
