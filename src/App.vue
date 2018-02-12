<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import '@/assets/theme/index.css'
Vue.use(ElementUI)
export default {
  name: 'App'
}
</script>

<style>
html {
  font-size: 62.5%;
}
body {
  margin: 0;
}
a {
  text-decoration:none;
}
li {
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 41.2rem;
  margin:0 auto;
}
.header-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 998;
  display: flex;
  align-items: center;
  height: 4.8rem;
  padding: 0 1.8rem;
  background: #fff;
  border-bottom: 0.1rem solid #f3f3f3;
}
.has-header {
  margin-top: 4.8rem;
}
</style>
