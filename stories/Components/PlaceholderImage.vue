<script>
import PlaceholderImage from '../../components/PlaceholderImage'

export default {
  components: {
    PlaceholderImage
  }
}
</script>

<template>
  <div>

    <h1>PlaceholderImage</h1>

    <p>
      Render a blank placeholder image tag with specific dimensions. Useful for rendering placeholders while images are being loaded.
    </p>

    <placeholder-image
      :width="20"
      :height="20"
    />

    <placeholder-image
      :width="100"
      :height="20"
    />

    <placeholder-image
      :width="100"
      :height="20"
      :dpi="2"
    />

  </div>
</template>

<style lang="scss" scoped>

.c-placeholder-image {
  background-color: rgba(0, 0, 0, 0.2);
}

</style>
