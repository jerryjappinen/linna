<script>
import AppStoreBadge from '../../components/AppStoreBadge'
import AppStoreLink from '../../components/AppStoreLink'
import GooglePlayBadge from '../../components/GooglePlayBadge'
import GooglePlayLink from '../../components/GooglePlayLink'
import MobileWebAppBadge from '../../components/MobileWebAppBadge'
import ProductHuntBadge from '../../components/ProductHuntBadge'
import WebAppBadge from '../../components/WebAppBadge'

import appBadgesCodeSample from './code/badges/appBadges.txt'
import productHuntCodeSample from './code/badges/ProductHuntBadge.txt'

export default {

  components: {
    AppStoreBadge,
    AppStoreLink,
    GooglePlayBadge,
    GooglePlayLink,
    MobileWebAppBadge,
    ProductHuntBadge,
    WebAppBadge
  },

  data () {
    return {
      appBadgesCodeSample,
      productHuntCodeSample,
      postId: 42363,
      postSlug: 'layer-css'
    }
  }

}

</script>

<template>
  <div>

    <h1>App badges</h1>

    <html-block :source="appBadgesCodeSample" />

    <h3>AppStoreBadge</h3>

    <p>
      <app-store-badge />
      <app-store-badge theme="light" />
    </p>

    <h3>AppStoreLink</h3>

    <p>
      <app-store-link
        app-id="1234"
      />
      <app-store-link
        app-id="1234"
        theme="light"
      />
    </p>

    <h3>GooglePlayBadge</h3>

    <p>
      <google-play-badge />
      <google-play-badge theme="light" />
    </p>

    <h3>GooglePlayLink</h3>

    <p>
      <google-play-link
        package-name="com.foo.bar"
      />
      <google-play-link
        package-name="com.foo.bar"
        theme="light"
      />
    </p>

    <h3>MobileAppBadge</h3>

    <p>
      <mobile-web-app-badge />
      <mobile-web-app-badge theme="light" />
    </p>

    <h3>WebAppBadge</h3>

    <p>
      <web-app-badge />
      <web-app-badge theme="light" />
    </p>

    <h1>ProductHuntBadge</h1>

    <p>
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      Display the official <doc href="https://www.producthunt.com/posts/layer-css/embed">ProductHunt badge</doc> for any post using the post ID and slug. Use the embed widget generator to get both and configure them in your project.
    </p>

    <html-block :source="productHuntCodeSample" />

    <p>
      <product-hunt-badge
        :post-id="postId"
        :post-slug="postSlug"
      />
    </p>

    <p>
      <product-hunt-badge
        :post-id="postId"
        :post-slug="postSlug"
        theme="light"
      />
    </p>

  </div>
</template>
