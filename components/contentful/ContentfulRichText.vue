<script>
// NOTE: this component is intended to be used in wrapper elements that pass component mapping from centralised config
import renderRichText from './renderRichText'

export default {
  name: 'ContentfulRichText',

  props: {

    richTextField: {
      type: Object,
      required: true
    },

    // {
    //   myContentfulContentType: {
    //     component: 'MyInlineOrBlockComponentName',
    //     inlineComponent: 'MyInlineOnlyComponentName',
    //     blockComponent: 'MyBlockOnlyComponentName',
    //     propName: 'anotherContentType',
    //     props: { myComponentProp: 'foo' }
    //   }
    // }
    components: {
      type: Object,
      required: true
    },

    // {
    //   component: 'MyAssetComponent',
    //   inlineComponent: 'MyInlineOnlyComponentName',
    //   blockComponent: 'MyBlockOnlyComponentName',
    //   propName: 'anotherContentType',
    //   props: { myComponentProp: 'foo' }
    // }
    assets: {
      type: Object,
      required: true,
      default () {
        return {
          component: 'Asset',
          propName: 'asset'
        }
      }
    },

    parentTag: {
      type: String,
      default: null
    },

    parentTagProps: {
      type: Object,
      default: null
    }

  },

  render (createElement) {

    if (this.richTextField && this.richTextField.content) {
      return renderRichText(
        this.richTextField.content,
        createElement,
        {
          assets: this.components,
          components: this.components,
          parentTag: this.parentTag,
          parentTagProps: this.parentTagProps
        }
      )
    }

    return null
  }

}
</script>
