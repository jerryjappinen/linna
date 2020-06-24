import filter from 'lodash/filter'
import RssParser from 'rss-parser'

const parser = new RssParser()

// NOTE: total hack, not reliable at all
const mediumPostIsComment = (post) => {
  return typeof post.categories === 'undefined'
}

const feedItemsFilter = (item) => {
  return !mediumPostIsComment(item)
}

export default () => {
  return {

    // Official API doesn't have a stories endpoint?
    // ...so we request RSS and parse it
    // https://github.com/Medium/medium-api-docs
    async fetchFeed (mediumUserName) {
      const feed = await parser.parseURL('https://medium.com/feed/@' + mediumUserName)
      return feed.items ? filter(feed.items, feedItemsFilter) : []
    },

    async fetchPublication (mediumPublicationName) {
      const feed = await parser.parseURL('https://medium.com/feed/' + mediumPublicationName)
      return feed.items ? filter(feed.items, feedItemsFilter) : []
    }

  }
}
