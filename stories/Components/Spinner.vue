<script>
import Spinner from '../../components/Spinner'

export default {

  components: {
    Spinner
  }

}

</script>

<template>
  <div>

    <h1>Spinner</h1>

    <div class="grid">
      <div><spinner /></div>
      <div><spinner /></div>
      <div><spinner /></div>
      <div><spinner /></div>
      <div><spinner :width="100" /></div>
      <div><spinner :stroke-width="2" /></div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

.grid {
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
