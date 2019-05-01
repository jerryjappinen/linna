<script>
export default {
  name: 'ScssBlock',
  props: {
    source: {}
  }
}
</script>

<template>
  <code-block
    :source="source"
    lang="scss"
  />
</template>
