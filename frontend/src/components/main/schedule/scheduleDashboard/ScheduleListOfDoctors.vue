<template>
<table class="schedule-table">
  <tr><td>Doctor 1</td></tr>
  <tr><td>Doctor 2</td></tr>
  <tr><td>Doctor 3</td></tr>
</table>
</template>

<script>
export default {
  name: "ScheduleListOfDoctors"
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