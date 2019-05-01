<script>
import Plain from '../../components/Plain'

import codeSample from './code/Plain.txt'

export default {

  components: {
    Plain
  },

  data () {
    return {
      codeSample
    }
  }

}

</script>

<template>
  <div>

    <h1>Plain</h1>

    <p>
      Display plaintext using <doc href="?path=/story/util--toPlainText">
        toPlainText
      </doc>.
    </p>

    <html-block :source="codeSample" />

    <plain
      :body="'<h1>This or that</h1>\n\nin Markdown <strong>or in HTML</strong>'"
      :block="true"
    />

  </div>
</template>

<style lang="scss" scoped>

.grid {
  @include flex;
  @include flex-wrap;
  margin-top: -0.5em;
  margin-left: -0.5em;

  > div {
    @include flex-fixed;
    padding: 0.5em;
  }

}

</style>
