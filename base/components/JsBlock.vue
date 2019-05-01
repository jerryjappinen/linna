<script>
export default {
  name: 'JsBlock',
  props: {
    source: {}
  }
}
</script>

<template>
  <code-block
    :source="source"
    lang="javascript"
  />
</template>
