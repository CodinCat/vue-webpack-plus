<template>
  <div>
    <counter></counter>
  </div>
</template>

<script>
import Counter from '../components/Counter'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  components: {
    Counter{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
