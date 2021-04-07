<template>
  <div id="app">
    <headerBar></headerBar>
    <router-view :key="$route.fullPath" />
    <footerBar></footerBar>
  </div>
</template>

<script>
  import headerBar from './views/banner_navbar'
  import footerBar from './views/footer'
  export default {
    name: 'App',
    components: {
      headerBar,
      footerBar
    }
  }
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css'
</style>