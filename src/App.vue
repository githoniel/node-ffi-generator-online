<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Index from '@/components/index'

Vue.use(ElementUI)

export default {
    name: 'App',
    components: {
        index: Index,
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin:0;
}
body {
    margin: 0;
    padding: 0;
}
</style>
