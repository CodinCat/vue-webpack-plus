<template>
  <div class="counter">
    <h2>Count: \{{ $store.state.count }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  methods: mapActions([
    'increment',
    'decrement'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ]){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
