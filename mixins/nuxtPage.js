import { kebabCase, includes, map } from 'lodash'

import config from '@/config'

// Page mixins, should be used in each page-level component
// FIXME: should also support passing a page object as `page`, not having to pass individual fields each time
// @param `externalPageType` (optional)
// @param `noIndex` (optional)
// @param `page` (optional)
// @param `pageAuthors` (optional)
// @param `pageDescription` (optional)
// @param `pageCoverImage` (optional)
// @param `pageCoverImageUrl` (optional)
// @param `pageInvertedHeader` (optional)
// @param `pageInvertedFooter` (optional)
// @param `pageIcon` (optional)
// @param `pageStyle` (optional)
// @param `pageTitle` (optional)
// @param `pageTypes` (optional)
// @param `pageUpdatedAt` (optional)
// @param `pagePublishedAt` (optional)
export default {

  head () {
    const meta = []
    const links = []
    const scripts = []

    // Add noindex meta tags to page head
    // https://nuxtjs.org/api/pages-head
    if (this.noIndex) {
      meta.push({
        hid: 'robots',
        name: 'robots',
        content: 'noindex'
      })
    }

    // Use content from page object, or explicitly provided values
    // FIXME: need to get siteTitle in somehow
    const pageTitle = this.pageTitle || (this.page ? this.page.fields.title : null)
    const pageDescription = this.pageDescription || (this.page ? this.page.fields.description : null)
    const pageCoverImage = this.pageCoverImage || (this.page ? this.page.fields.coverImage : null)
    const pageStyle = this.pageStyle || (this.page ? this.page.fields.style : null)
    const pageTypes = this.pageTypes || (this.page ? this.page.fields.types : null)

    // Page title
    let title = pageTitle
    if (title) {
      title += !includes(pageTitle, this.siteTitle)
        ? ' – ' + this.siteTitle
        : ''

      meta.push({
        hid: 'twitter:title',
        property: 'twitter:title',
        content: title
      })

      meta.push({
        hid: 'og:title',
        property: 'og:title',
        content: title
      })

    }

    // Page description
    if (pageDescription) {

      meta.push({
        hid: 'description',
        name: 'description',
        content: pageDescription
      })

      meta.push({
        hid: 'og:description',
        property: 'og:description',
        content: pageDescription
      })

      meta.push({
        hid: 'twitter:description',
        property: 'twitter:description',
        content: pageDescription
      })

    }

    // Splash image for social sharing
    if (pageCoverImage || this.pageCoverImageUrl) {

      // Support either direct URL or Contentful resource field
      const url = this.pageCoverImageUrl
        ? this.pageCoverImageUrl
        : pageCoverImage.fields.file.url

      meta.push({
        hid: 'twitter:image',
        property: 'twitter:image',
        content: url
      })

      meta.push({
        hid: 'og:image',
        property: 'og:image',
        content: url
      })

    }

    // Articles have special handling
    if (this.externalPageType === 'article') {
      meta.push({
        hid: 'og:type',
        property: 'og:type',
        content: 'article'
      })
    }

    // Favicon (png file under /static)
    if (this.pageIcon) {
      links.push({
        hid: 'favicon',
        rel: 'icon',
        type: 'image/png',
        href: '/' + this.pageIcon
      })
    }



    // Canonical URL
    const canonicalUrl = config.productionBaseUrl + this.$route.path
    links.push({
      rel: 'canonical',
      href: canonicalUrl
    })

    meta.push({
      hid: 'og:url',
      property: 'og:url',
      content: canonicalUrl
    })



    // Print standardised class names for body that can be used for styling
    const headerStyle = (this.pageInvertedHeader ? 'inverted' : 'regular')
    const footerStyle = (this.pageInvertedFooter ? 'inverted' : 'regular')
    let bodyClasses = [
      'body-dark-mode',
      'body-page-' + this.$route.name,
      'body-layout-' + (this.$options.layout ? this.$options.layout : 'default')
    ]

    bodyClasses.push('body-page-style-' + headerStyle + '-header')
    bodyClasses.push('body-page-style-' + footerStyle + '-footer')

    if (pageStyle) {
      bodyClasses.push('body-page-style-' + pageStyle)
    }

    if (this.externalPageType) {
      bodyClasses.push('body-page-type-' + this.externalPageType)
    }

    if (pageTypes) {
      bodyClasses = bodyClasses.concat(map(pageTypes, (pageType) => {
        return 'body-page-type-' + kebabCase(pageType)
      }))
    }

    // Return all meta content for Nuxt
    return {
      title: title || pageTitle,
      meta,
      link: links,
      script: scripts,
      bodyAttrs: {
        class: bodyClasses.join(' ')
      },

      // NOTE: understand that we disable script content sanitization here (we do this for microdata)
      __dangerouslyDisableSanitizers: ['script']
    }

  }

}
