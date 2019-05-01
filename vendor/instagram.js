import axios from 'axios'

const apiBaseUrl = 'https://api.instagram.com/v1/'

export default (accessToken) => {

  const fetch = async (endpoint, options) => {
    const response = await axios.get(apiBaseUrl + endpoint, {
      params: {
        access_token: accessToken,
        ...options
      }
    })
    return response.data.data
  }

  return {
    fetch,
    async fetchOwnFeed (count) {
      return fetch('users/self/media/recent/', {
        count: count || 60
      })
    }
  }
}
