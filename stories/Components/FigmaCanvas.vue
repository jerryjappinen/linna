<script>
import FigmaCanvas from '../../components/FigmaCanvas'

export default {

  components: {
    FigmaCanvas
  },

  data () {
    return {
      projectId: 'egsN9lmc2dWJYdV0cf2cVP',
      nodeId: '0%3A828'
    }
  }

}

</script>

<template>
  <div>

    <h1>FigmaCanvas</h1>

    <p>
      Use the URL of your Figma project to get the project and node IDs.
    </p>

    <figma-canvas :project="projectId" />

    <h2>With node ID</h2>

    <figma-canvas
      :project="projectId"
      :node="nodeId"
    />

  </div>
</template>
