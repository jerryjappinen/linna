<script>
export default {
  name: 'CssBlock',
  props: {
    source: {}
  }
}
</script>

<template>
  <code-block
    :source="source"
    lang="css"
  />
</template>
