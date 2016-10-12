<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from 'components/Navbar'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  components: { Navbar }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
