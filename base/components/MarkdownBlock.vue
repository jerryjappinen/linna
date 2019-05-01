<script>
export default {
  name: 'MarkdownBlock',
  props: {
    source: {}
  }
}
</script>

<template>
  <code-block
    :source="source"
    lang="markdown"
  />
</template>
