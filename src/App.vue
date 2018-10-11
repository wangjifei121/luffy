<template>
  <div id="app">
    <navbar></navbar>
    <detail></detail>
    <bottom></bottom>
  </div>
</template>

<script>
  import navbar from "./components/navbar"
  import detail from "./components/detail"
  import bottom from "./components/bottom"

  export default {
    name: 'App',
    components:{
      navbar:navbar,
      detail:detail,
      bottom:bottom,
    }

  }
</script>

<style>

</style>
