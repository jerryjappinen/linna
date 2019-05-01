<script>
export default {
  name: 'JsonBlock',
  props: {
    source: {}
  }
}
</script>

<template>
  <code-block
    :source="source"
    lang="json"
  />
</template>
