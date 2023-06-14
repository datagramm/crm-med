<template>
<div class="container-dashboard">
  <div class="group-point" v-for="doctor in getDoctors" :key="doctor">
   <div class="point" v-for="n in 19" :key="n"></div>
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
   box-sizing: border-box;

   border-radius: 1vh 0 0 0;
   background-color: rgba(243, 243, 243, 0.99);
   width: 80%;
   height: 100%;

 }
 .point {
   clip-path: circle(40%);
   width: 0.5vh;
   height: 0.5vh;
   background-color: #8d8f94;
 }
 .group-point {
   justify-content: space-evenly;
   align-items: center;
   height: 100px;
   width: 100%;
   display: flex;
 }

</style>