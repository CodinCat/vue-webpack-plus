<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/counter">Counter</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

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
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

a {
  color: #42b983;
  text-decoration: none;
}

nav a {
  font-size: 24px;
}
</style>
