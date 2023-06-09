<template>
<div class="container-dashboard">
  <div class="group-point" v-for="doctor in getDoctors" :key="doctor">
   <div class="point" v-for="n in 18" :key="n"></div>
  </div>






</div>
</template>

<script>
import {mapGetters} from "vuex";
import {mapActions} from "vuex";

export default {
  name: "ScheduleDashboard",

  methods: {
    ...mapActions(['computeCoordinatesOfPoints'])
  },
  mounted() {
    this.computeCoordinatesOfPoints()

  },


  computed: mapGetters(["getDoctors", "getAllPoints"])
}
</script>

<style scoped>
 .container-dashboard {
   flex-direction: column;
   display: flex;
   padding: 3vh;
   box-sizing: border-box;
   border: 2px solid white;
   border-radius: 1vh;
   background-color: #454050;
   width: 70%;
   height: 90%;

 }
 .point {
   color: white;
   clip-path: circle(40%);
   width: 0.5vh;
   height: 0.5vh;
   background-color: white;
 }
 .group-point {
   justify-content: space-evenly;
   align-items: center;
   height: 5vh;
   width: 100%;
   display: flex;
 }

</style>