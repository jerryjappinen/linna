<script>
import codeSample from './code/persist.txt'

export default {

  data () {
    return {
      codeSample
    }
  }

}

</script>

<template>
  <div>

    <h1>Persist</h1>

    <js-block source="import persist from 'linna/mixins/persist'" />

    <p>
      Store component data in local storage easily. You can store data per component instance, or share the same data across component instances.
    </p>

    <h3>Example</h3>

    <js-block :source="codeSample" />

  </div>
</template>
