import axios from 'axios'
import base64 from 'base-64'

// See "Step 1" at
// https://developer.twitter.com/en/docs/basics/authentication/overview/application-only
const encodeConsumerKey = (key, secret) => {
  return base64.encode(encodeURI(key) + ':' + encodeURI(secret))
}

// See "Step 2" at
// https://developer.twitter.com/en/docs/basics/authentication/overview/application-only
const fetchToken = (encodedKey) => {
  return axios.post(
    'https://api.twitter.com/oauth2/token',
    'grant_type=client_credentials',
    {
      headers: {
        'Authorization': 'Basic ' + encodedKey,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    }
  )
}

const invalidateToken = (encodedKey, accessToken) => {
  return axios.post(
    'https://api.twitter.com/oauth2/invalidate_token',
    'access_token=' + accessToken,
    {
      headers: {
        'Authorization': 'Basic ' + encodedKey,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  )
}

const fetchTimeline = (accessToken, twitterUserName) => {
  return axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json', {
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    params: {
      count: 60,
      screen_name: twitterUserName,
      exclude_replies: true,
      include_rts: false
    }
  })
}

// Execute callback with a new token that also gets invalidated after the request
const scopeTwitterRequest = async (encodedKey, callback, ...args) => {

  // Get a token that we need to authenticate to Twitter
  const tokenResponse = await fetchToken(encodedKey)

  // Now we can fetch the content
  const callbackResponse = await callback(tokenResponse.data.access_token, ...args)

  // Invalidate the token we just got, we don't need it anymore
  invalidateToken(encodedKey, tokenResponse.data.access_token)

  return callbackResponse.data
}

export default (consumerKey, consumerSecret) => {
  const encodedKey = encodeConsumerKey(consumerKey, consumerSecret)

  return {
    async fetchTimeline (twitterUserName) {
      return scopeTwitterRequest(encodedKey, fetchTimeline, twitterUserName)
    }
  }
}
