<template>
<table class="schedule-table">
  <tr v-for="doctor in getDoctors" :key="doctor"><td>{{doctor.name + " " + doctor.surname}}</td></tr>
</table>
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
    width: 30%;
    height: auto;
    border-radius: 1vh;
  }
  .schedule-table td {
    text-align: center;
  }

</style>