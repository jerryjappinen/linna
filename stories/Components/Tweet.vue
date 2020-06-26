<script>
import Tweet from '../../components/Tweet'

export default {

  components: {
    Tweet
  },

  data () {
    return {
      twitterUserName: 'lateralnord',
      tweetId: 1210678707326791680
    }
  }

}

</script>

<template>
  <div>

    <h1>Tweet</h1>

    <div>
      <tweet
        :user-name="twitterUserName"
        :tweet-id="tweetId"
      />
    </div>

    <div>
      <tweet
        :user-name="twitterUserName"
        :tweet-id="tweetId"
        :dark="true"
      />
    </div>

  </div>
</template>
