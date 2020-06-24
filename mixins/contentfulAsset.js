import includes from 'lodash/includes'

const types = {

  image: [
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/bmp',
    'image/webp'
  ],

  pdf: [
    'application/pdf'
  ],

  video: [
    'video/ogg',
    'video/mov',
    'video/mp4',
    'video/webv'
  ]

}

// @prop `asset`
export default {

  props: {

    asset: {
      type: Object,
      required: true
    }

  },

  computed: {

    mimeType () {
      return this.asset.fields.file.contentType
    },

    isImage () {
      return includes(types.image, this.mimeType)
    },

    isPdf () {
      return includes(types.pdf, this.mimeType)
    },

    isVideo () {
      return includes(types.video, this.mimeType)
    },

    formattedFileSize () {
      return this.asset.fields.file.details.size
    },

    title () {

      if (this.asset.fields.description) {
        return this.asset.fields.description
      }

      return this.asset.fields.file.filename
    },

    url () {
      return 'https:' + this.asset.fields.file.url
    }

  }

}
