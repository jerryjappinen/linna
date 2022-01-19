<script>
import ExternalLink from '../../components/ExternalLink'

export default {
  components: {
    ExternalLink
  }
}

</script>

<template>
  <div>

    <h1>ExternalLink</h1>

    <p>
      <external-link href="https://domain.com">
        domain.com
      </external-link>
    </p>

    <p>
      <external-link
        href="https://domain.com"
        :here="true"
      >
        domain.com (same tab)
      </external-link>
    </p>

    <p>
      <external-link
        href="https://domain.com"
        :refer="true"
      >
        domain.com (refer)
      </external-link>
    </p>

    <p>
      <external-link
        href="https://domain.com"
        :here="true"
        :refer="true"
      >
        domain.com (here, refer)
      </external-link>
    </p>

  </div>
</template>
