<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
  // import headerBar from './components/banner_navbar'
  // import footerBar from './components/footer'
  export default {
    name: 'App',
    // components: {
    //   headerBar,
    //   footerBar
    // }
  }
</script>

<style>

</style>