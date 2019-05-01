<script>
import globalCodeSample from './code/styles/global.txt'
import sharedCodeSample from './code/styles/shared.txt'

export default {

  data () {
    return {
      globalCodeSample,
      sharedCodeSample
    }
  }

}

</script>

<template>
  <div>

    <h1>Styles</h1>

    <p>
      <doc href="https://bitbucket.org/Eiskis/linna/src/master/styles/">
        Source code on Bitbucket
      </doc>
    </p>

    <p>Shared tools (no CSS output). Put this in your <code>shared.scss</code>.</p>

    <scss-block :source="sharedCodeSample" />

    <p>Global styles and utilities. Put this in your <code>global.scss</code>.</p>

    <scss-block :source="globalCodeSample" />

  </div>
</template>
