import axios from 'axios'
import filter from 'lodash/filter'

const getBaseUrl = (apiVersion) => {
  return 'https://calendly.com/api/v' + (apiVersion || 1) + '/'
}

const fetch = async (apiKey, apiVersion, endpoint) => {
  const response = await axios.get(getBaseUrl(apiVersion) + endpoint, {
    headers: {
      'X-TOKEN': apiKey
    }
  })
  return response.data
}

// https://developer.calendly.com/docs/test-authentication-token
export default (apiKey, apiVersion) => {

  const scopedFetch = async (endpoint) => {
    return fetch(apiKey, apiVersion, endpoint)
  }

  return {
    fetch: scopedFetch,
    async fetchEventTypes () {
      const data = await scopedFetch('users/me/event_types')
      return data.data ? filter(data.data, 'attributes.active') : []
    }
  }
}
