import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'

export const getHtmlNodeType = (nodeType) => {

  const defaultTags = {
    [BLOCKS.HEADING_1]: 'h1',
    [BLOCKS.HEADING_2]: 'h2',
    [BLOCKS.HEADING_3]: 'h3',
    [BLOCKS.HEADING_4]: 'h4',
    [BLOCKS.HEADING_5]: 'h5',
    [BLOCKS.HEADING_6]: 'h6',
    [BLOCKS.PARAGRAPH]: 'p',
    [BLOCKS.UL_LIST]: 'ul',
    [BLOCKS.OL_LIST]: 'ol',
    [BLOCKS.LIST_ITEM]: 'li',
    [BLOCKS.QUOTE]: 'blockquote',
    [BLOCKS.HR]: 'hr',
    [INLINES.HYPERLINK]: 'a',
    [MARKS.BOLD]: 'strong',
    [MARKS.ITALIC]: 'em',
    [MARKS.UNDERLINE]: 'u',
    [MARKS.CODE]: 'code'
  }

  return defaultTags[nodeType]
}

export const isCustomBlock = (nodeType) => {
  return nodeType === BLOCKS.EMBEDDED_ENTRY
}

export const isCustomInline = (nodeType) => {
  return nodeType === INLINES.EMBEDDED_ENTRY
}

export const isCustomAsset = (nodeType) => {
  return nodeType === BLOCKS.EMBEDDED_ASSET
}

export const isCustomEntry = (nodeType) => {
  return isCustomBlock(nodeType) || isCustomInline(nodeType)
}
