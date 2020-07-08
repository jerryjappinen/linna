<script>
import PlaceholderText from '../../components/PlaceholderText'

export default {
  components: {
    PlaceholderText
  }
}
</script>

<template>
  <div>

    <h1>PlaceholderText</h1>

    <p>
      Render a blank placeholder image tag with specific dimensions. Useful for rendering placeholders while images are being loaded.
    </p>

    <placeholder-text />

    <placeholder-text :words="40" />

    <ul>
      <li><placeholder-text :inline="true" /></li>
      <li><placeholder-text :inline="true" /></li>
      <li><placeholder-text :inline="true" /></li>
      <li><placeholder-text :inline="true" /></li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>

.c-placeholder-text {
  color: rgba(255, 0, 0, 0.1);

  &:hover {
    color: rgba(255, 0, 0, 0.5);
  }

}

</style>
