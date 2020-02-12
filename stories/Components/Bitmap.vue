<script>
import Bitmap from '../../components/Bitmap'
import DelayedBitmap from '../../components/DelayedBitmap'
import LazyBitmap from '../../components/LazyBitmap'

import BitmapCodeSample from './code/Bitmap/Bitmap.txt'
import DelayedBitmapCodeSample from './code/Bitmap/DelayedBitmap.txt'
import LazyBitmapCodeSample from './code/Bitmap/LazyBitmap.txt'

export default {

  components: {
    Bitmap,
    DelayedBitmap,
    LazyBitmap
  },

  data () {
    return {
      randomImageBaseUrl: 'https://source.unsplash.com/1600x900/',

      BitmapCodeSample,
      DelayedBitmapCodeSample,
      LazyBitmapCodeSample
    }
  }

}

</script>

<template>
  <div>

    <h1>Bitmap components</h1>

    <div class="grid">

      <html-block :source="BitmapCodeSample" />
      <html-block :source="DelayedBitmapCodeSample" />
      <html-block :source="LazyBitmapCodeSample" />

      <bitmap
        :src="randomImageBaseUrl + '?nature'"
        title="Nature"
      />

      <delayed-bitmap
        :src="randomImageBaseUrl + '?tech'"
        title="Tech"
      />

      <lazy-bitmap
        :src="randomImageBaseUrl + '?space'"
        title="Space"
      />

    </div>

    <p>
      Use <code>natural-width</code> and <code>natural-height</code> to set natural dimensions if you know them.
    </p>

    <bitmap
      :src="randomImageBaseUrl + '?nature'"
      :natural-width="1600"
      :natural-height="900"
      title="Nature"
    />

    <h3>Scroll down to see examples out of viewport</h3>

    <div class="grid viewport-push">
      <bitmap :src="randomImageBaseUrl + '?animals'" />
      <delayed-bitmap :src="randomImageBaseUrl + '?people'" />
      <lazy-bitmap :src="randomImageBaseUrl + '?planes'" />
    </div>

  </div>
</template>

<style lang="scss" scoped>

.grid {
  @include grid;
  @include grid-columns(3);
  @include grid-gap(1em, 1em);
}

.viewport-push {
  @include push-loose-bottom;
  margin-top: 100vh;
}

</style>
