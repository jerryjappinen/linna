<script>
export default {
  name: 'HtmlBlock',
  props: {
    source: {}
  }
}
</script>

<template>
  <code-block
    :source="source"
    lang="html"
  />
</template>
