<script>
import getGravatarImageUrl from '../../util/getGravatarImageUrl.js'

export default {

  data () {
    return {
      email: 'eiskis@gmail.com',
      size: 128
    }
  },

  computed: {

    imageUrl () {
      return getGravatarImageUrl(this.email, this.size)
    }

  }

}

</script>

<template>
  <div>

    <h1>Gravatar</h1>

    <p>
      Dependencies: <code>md5</code>
    </p>

    <blockquote><code>npm install md5</code></blockquote>

    <h3>
      <code>getGravatarImageUrl</code>
    </h3>

    <js-block source="getGravatarImageUrl(email, size)" />

    <p>

      <input v-model="email">

      <input
        v-model="size"
        type="number"
      >

    </p>

    <p>
      <img :src="imageUrl">
    </p>

  </div>
</template>
