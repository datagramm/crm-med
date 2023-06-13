<template>
<div class="schedule-table">
  <div class="doctor" v-for="doctor in getDoctors" :key="doctor" >{{doctor.name + " " + doctor.surname}}</div>
</div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "ScheduleListOfDoctors",

  computed: mapGetters(['getDoctors'])
}
</script>

<style scoped>
  .schedule-table {
    width: 20%;
    height: auto;
    border-radius: 1vh;
  }
  .schedule-table  {
    border-radius: 0 1vh 0 0;
    background-color: #628EFF;
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .doctor {

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }



</style>