<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

html, body {
  height: 100vh;
  padding: 0;
  margin: 0;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #fff;
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color:rgba(7, 170, 247, 0.7);
}

::-webkit-scrollbar-thumb:hover {
  border-radius: 3px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color:rgba(7, 170, 247, 1);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
