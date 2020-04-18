<script>
import viewport from '../../services/viewport'

export default {

  computed: {
    dump () {
      return {
        width: viewport.width,
        height: viewport.height,
        scrollX: viewport.scrollX,
        scrollY: viewport.scrollY,
        hasObtrusiveScrollbars: viewport.hasObtrusiveScrollbars,
        isScrolled: viewport.isScrolled,
        isScrolledX: viewport.isScrolledX,
        isLandscape: viewport.isLandscape,
        isPortrait: viewport.isPortrait,
        isMobile: viewport.isMobile,
        isDesktop: viewport.isDesktop
      }
    }
  }

}

</script>

<template>
  <div class="root">

    <h1>Viewport service</h1>

    <js-block source="import viewport from 'linna/services/viewport'" />

    <p>
      Get basic, reactive information about screen size and viewport scroll position.
    </p>

    <js-block :source="dump" />

  </div>
</template>
