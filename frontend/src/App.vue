<template>
  <div id="app">
 <router-view></router-view>
  </div>
</template>

<script>


import {mapActions} from "vuex";

export default {
  name: 'App',
  methods: {
    ...mapActions(['offFloatAnimation'])
  },
  mounted() {
    this.offFloatAnimation()
  }

}
</script>

<style lang="scss" >
 #app, body {
   margin: 0;
   padding: 0;
 }


</style>
