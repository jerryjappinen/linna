// NOTE: this module returns a generator function. Use this to generate the complete page mixin in your Nuxt project.
import kebabCase from 'lodash/kebabCase'
import includes from 'lodash/includes'
import map from 'lodash/map'
import { isUndefined } from 'lodash'

// Page mixins, should be used in each page-level component
// FIXME: should also support passing a page object as `page`, not having to pass individual fields each time
// @param `externalPageType` (optional)
// @param `noIndex` (optional)
// @param `page` (optional)
// @param `pageAuthors` (optional)
// @param `pageDescription` (optional)
// @param `pageCoverImage` (optional)
// @param `pageCoverImageUrl` (optional)
// @param `pageIcon` (optional)
// @param `pageStyle` (optional)
// @param `pageTitle` (optional)
// @param `pageTypes` (optional)
// @param `pageUpdatedAt` (optional)
// @param `pagePublishedAt` (optional)

// NOTE: Use disableScriptSanitization to disable script content sanitization. You might need it for microdata.
// https://vue-meta.nuxtjs.org/api/#dangerouslydisablesanitizers
export default ({ siteTitle, baseUrl, disableScriptSanitization }) => {
  return {
    head () {
      let title
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
      let pageTitleSeparator = this.pageTitleSeparator || (this.page ? this.page.fields.titleSeparator : undefined)
      const pageSiteTitle = this.siteTitle || (this.page ? this.page.fields.siteTitle : undefined) || siteTitle
      const pageTitle = this.pageTitle || (this.page ? this.page.fields.title : undefined)
      const pageDescription = this.pageDescription || (this.page ? this.page.fields.description : undefined)
      const pageCoverImage = this.pageCoverImage || (this.page ? this.page.fields.coverImage : undefined)
      const pageStyle = this.pageStyle || (this.page ? this.page.fields.style : undefined)
      const pageTypes = this.pageTypes || (this.page ? this.page.fields.types : undefined)

      if (isUndefined(pageTitleSeparator)) {
        pageTitleSeparator = '–'
      }

      // Page title
      if (pageSiteTitle || pageTitle) {
        title = pageTitle || pageSiteTitle

        if (pageSiteTitle && !includes(title, pageSiteTitle)) {
          title += ' ' + (pageTitleSeparator ? (pageTitleSeparator.trim() + ' ' + pageSiteTitle) : '')
        }

        title = title.trim()

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

        meta.push({
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: title
        })
      }

      // Page author
      if (this.pageAuthor) {
        meta.push({
          hid: 'author',
          name: 'author',
          content: this.pageAuthor
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
      if (baseUrl) {
        const canonicalUrl = baseUrl + this.$route.path
        links.push({
          rel: 'canonical',
          href: canonicalUrl
        })

        meta.push({
          hid: 'og:url',
          property: 'og:url',
          content: canonicalUrl
        })
      }

      // Print standardised class names for body that can be used for styling
      let bodyClasses = [
        'body-dark-mode',
        'body-page-' + kebabCase(this.$route.name),
        'body-layout-' + kebabCase(this.$options.layout ? this.$options.layout : 'default')
      ]

      if (pageStyle) {
        bodyClasses.push('body-page-style-' + kebabCase(pageStyle))
      }

      if (this.externalPageType) {
        bodyClasses.push('body-page-type-' + kebabCase(this.externalPageType))
      }

      if (pageTypes) {
        bodyClasses = bodyClasses.concat(map(pageTypes, (pageType) => {
          return 'body-page-type-' + kebabCase(pageType)
        }))
      }

      // Return all meta content for Nuxt
      return {
        title,
        meta,
        link: links,
        script: scripts,
        bodyAttrs: {
          class: bodyClasses.join(' ')
        },

        __dangerouslyDisableSanitizers: disableScriptSanitization ? ['script'] : null
      }
    }
  }
}
