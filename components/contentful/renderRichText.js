import { isArray, kebabCase, map } from 'lodash'

import {
  getHtmlNodeType,
  isCustomAsset,
  isCustomBlock,
  isCustomInline
} from './richTextTypes'



// Transformation

// Transform rich text nodes to HTML
export const getRenderedNodes = (richTextNodes, componentMapping, assetMapping, createElement) => {
  let renderedNodes = []
  richTextNodes.forEach((richTextNode) => {

    // Recursion
    const children = getRenderedNode(
      richTextNode,
      createElement,
      assetMapping,
      componentMapping
    )

    // We might get one or multiple objects, so need to normalize
    renderedNodes = renderedNodes.concat(
      !isArray(children) ? [children] : children
    )

  })

  return renderedNodes
}

const getRenderedNode = (node, componentMapping, assetMapping, createElement) => {
  const htmlNodeType = getHtmlNodeType(node.nodeType)
  const config = getComponentConfig(node, componentMapping, assetMapping)

  // Recursion
  let children = null
  if (node.content && node.content.length) {
    children = getRenderedNodes(
      node.content,
      componentMapping,
      assetMapping,
      createElement
    )
  }

  // Render raw HTML tag
  if (htmlNodeType) {
    return renderHtmlTag(
      htmlNodeType,
      node,
      children,
      createElement
    )

  // Render custom component
  } else if (config.type && config.componentName) {

    // Choose the prop name for passing the contentful object
    const propName = config.propName || (config.type === 'asset' ? 'asset' : 'entry')

    // Return rendered custom element
    return createElement(
      kebabCase(config.componentName),
      {
        props: {

          // FIXME: will these be reactive?
          ...(config.props || {}),
          [propName]: node.data.target

        }
      },
      children
    )

  // Inline markup
  // Marks is an array of objects with a `type` value indicating the tag
  } else if (node.marks && node.marks.length) {

    const tags = map(node.marks, (markConfig) => {
      return getHtmlNodeType(markConfig.type)
    })

    return getWrappedNodes(
      tags,
      [node.value].concat(children),
      createElement
    )

  }

  return node.value
}



// Resolve component name

const getComponentConfig = (richTextNode, componentMapping, assetMapping) => {

  // Asset
  if (isCustomAsset(richTextNode.nodeType)) {
    return {
      ...assetMapping,
      type: 'asset'
    }

  } else {
    const nodeIsCustomBlock = isCustomBlock(richTextNode.nodeType)
    const nodeIsCustomInline = isCustomInline(richTextNode.nodeType)

    // Valid block or inline element
    if (nodeIsCustomBlock || nodeIsCustomInline) {
      const resource = richTextNode.data.target

      return getComponentForContentType(
        resource.sys.contentType.sys.id,
        componentMapping,
        nodeIsCustomInline
      )
    }

  }

  return null
}

const getComponentForContentType = (contentType, componentMapping, nodeIsCustomInline) => {
  const config = componentMapping[contentType]

  if (config) {
    let componentName = null

    if (config.inlineComponent && nodeIsCustomInline) {
      componentName = config.inlineComponent

    } else if (config.blockComponent && !nodeIsCustomInline) {
      componentName = config.blockComponent

    } else if (config.component) {
      componentName = config.component
    }

    if (componentName) {
      return {
        componentName,
        propName: config.propName,
        props: config.props,
        type: nodeIsCustomInline ? 'inline' : 'block'
      }
    }

  }

  return null
}



// HTML rendering

const renderHtmlTag = (htmlNodeType, node, children, createElement) => {
  const attrs = getHtmlTagAttrsFromNode(node)
  const domProps = getHtmlTagPropsFromNode(node)

  return createElement(
    htmlNodeType,
    {
      attrs,
      domProps
    },
    children
  )
}

const getHtmlTagAttrsFromNode = (node) => {

  if (node) {
    return {
      class: 'rich-text-' + node.nodeType
    }
  }

  return null
}

const getHtmlTagPropsFromNode = (node) => {

  if (node && node.data) {

    const props = {
      ...node.data
    }

    if (node.data.uri) {
      props.href = node.data.uri
    }

    return props

  }

  return null
}



// Inline rendering

// Wrap content into as many HTML tags as desired
const getWrappedNodes = (tags, children, createElement) => {
  let contentToRender = createElement(tags[0], {}, children)

  if (tags.length > 1) {
    for (let i = 1; i < tags.length; i++) {
      contentToRender = createElement(tags[i], {}, [contentToRender])
    }
  }

  return contentToRender
}



// Exposed API
export default (
  richTextNodes,
  createElement,
  options
) => {

  // Basic error checking
  if (!richTextNodes) {
    throw new Error('No nodes passed as rich text')
  }

  // Render with options or defaults
  return createElement(
    (options.parentTag || 'div'),
    (options.parentTagProps || {}),

    // Inject child nodes
    getRenderedNodes(
      richTextNodes,
      (options.components || {}),
      {
        propName: 'asset',
        ...(options.assets || {})
      },
      createElement
    )
  )
}
