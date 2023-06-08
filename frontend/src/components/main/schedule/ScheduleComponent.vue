<template>
  <div class="main-container">
    <leftMenu></leftMenu>
    <div class="right-component">

      <div class="schedule-sub">
      <ScheduleListOfDoctors></ScheduleListOfDoctors>
    <ScheduleDashboard></ScheduleDashboard>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from "@/components/main/leftMenuItem/leftMenu.vue";
import ScheduleDashboard from "@/components/main/schedule/scheduleDashboard/ScheduleDashboard";
import ScheduleListOfDoctors from "@/components/main/schedule/scheduleDashboard/ScheduleListOfDoctors";
export default {
  name: "ScheduleComponent",
  components: {leftMenu, ScheduleDashboard, ScheduleListOfDoctors}
}
</script>

<style scoped>
  .right-component {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

  }
  .schedule-sub {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-content: center;
    width: 90%;
    height: 80%;
  }

</style>