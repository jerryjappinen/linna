import getContentfulImageUrl from '../../util/getContentfulImageUrl'

// https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/change-the-resizing-behavior
export default {

  props: {

    title: {
      type: String,
      default: null
    },

    url: {
      type: String,
      required: false
    },

    image: {
      type: Object,
      required: false
    },

    width: {
      type: [Number, String],
      default: null
    },

    height: {
      type: [Number, String],
      default: null
    },

    dpi: {
      type: Number,
      default: 2
    },

    format: {
      type: String,
      default: null
    },

    fit: {
      type: String,
      default: null
    },

    focus: {
      type: String,
      default: null
    }

  },

  computed: {

    resolvedTitle () {
      return this.title || this.image.fields.description || (
        this.image && this.image.fields
          ? this.image.fields.title
          : null
      )
    },

    resolvedWidth () {
      if (this.dpi) {
        return this.dpi * this.width
      }
      return this.width
    },

    resolvedHeight () {
      if (this.dpi) {
        return this.dpi * this.height
      }
      return this.height
    },

    src () {
      return getContentfulImageUrl({
        url: this.url,
        image: this.image,
        fit: this.fit || (this.width && this.height ? 'thumb' : null),
        format: this.format,
        focus: this.focus,
        width: this.resolvedWidth,
        height: this.resolvedHeight
      })
    }

  }

}