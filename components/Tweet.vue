<script>
export default {
  name: 'Tweet',

  props: {

    userName: {
      type: String,
      required: true
    },

    tweetId: {
      type: String,
      required: true
    },

    // Optional

    userDisplayName: {
      type: String,
      default: null
    },

    userProfileImageUrl: {
      type: String,
      default: null
    },

    tweetLanguage: {
      type: String,
      default: null
    },

    tweetTextDirection: {
      type: String,
      default: null
    },

    tweetBody: {
      type: String,
      default: null
    },

    tweetTimestamp: {
      type: String,
      default: null
    }
  }

}
</script>

<template>
  <div class="c-tweet">
    <blockquote
      class="c-tweet-placeholder twitter-tweet no-rhythm"
      data-dnt="true"
    >
      <div class="c-tweet-placeholder-content">
        <div class="c-tweet-link">
          <a :href="'https://twitter.com/' + userName">
            See {{ userName }}'s other Tweets
          </a>
        </div>

        <a
          :href="'https://twitter.com/' + userName"
          class="c-tweet-user"
        >

          <img
            v-if="userProfileImageUrl"
            :src="userProfileImageUrl"
            class="c-tweet-user-image"
          >

          <div
            v-else
            class="c-tweet-user-image-placeholder"
          />

          <div class="c-tweet-placeholder-user-details">
            <div>
              <strong>{{ userDisplayName || userName }}</strong>
            </div>
            <div class="c-tweet-info">
              @{{ userName }}
            </div>
          </div>

        </a>

        <div class="c-tweet-content">
          <p
            :lang="tweetLanguage || 'en'"
            :dir="tweetTextDirection || 'ltr'"
          >
            {{ tweetBody || '' }}
          </p>
          <div class="c-tweet-info">
            {{ userDisplayName || userName }} (@{{ userName }})
            <a :href="'https://twitter.com/' + userName + '/status/' + tweetId">
              {{ tweetTimestamp || 'Go to tweet' }}
            </a>
          </div>
        </div>
      </div>
    </blockquote>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    />
  </div>
</template>

<style lang="scss">

.c-tweet {
  width: 550px;
  max-width: 100%;

  .twitter-tweet {
    width: 100% !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

}

.c-tweet-placeholder {
  @include border-box;
  max-width: 100%;
  width: 530px;
  min-width: 220px;
  margin-left: auto;
  margin-right: auto;
  border-width: 1px;
  border-radius: 5px;
  border-color: #e1e8ed;
  color: #1c2022;
  background-color: #fff;
  font-size: 16px;
  line-height: 1.4;
  font-family: Helvetica, Roboto, "Segoe UI", Calibri, sans-serif;
  font-style: normal;
}

.c-tweet-placeholder-content {
  @include flex;
  @include flex-vertical;
}

.c-tweet-user,
.c-tweet-content,
.c-tweet-link {
  padding-left: 20px;
  padding-right: 20px;
}

.c-tweet-content,
.c-tweet-user {
  padding-top: 20px;
}

.c-tweet-user {
  @include flex;
}

.c-tweet-placeholder-user-details {
  line-height: 1.2;
}

.c-tweet-user-image,
.c-tweet-user-image-placeholder {
  @include flex-fixed;
  width: 36px;
  height: 36px;
  margin-right: 9px;
  border-radius: 36px;
}

.c-tweet-content {
  padding-bottom: 12px;
  border-color: #e1e8ed;
  border-bottom-width: 1px;

  .c-tweet-info {
    margin-top: 10px;
  }

}

.c-tweet-info,
.c-tweet-link {
  font-size: 14px;
}

.c-tweet-info {
  color: #697882;
}

.c-tweet-link {
  order: 2;
  padding-top: 9px;
  padding-bottom: 9px;
  color: #2b7bb9;
}

</style>
