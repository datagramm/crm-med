<template>
  <div class="main-container" @click="clearBorderBlock" >
    <leftMenu></leftMenu>
    <div class="right-component">
     <div class="block" @click="handleClickAnim($event); moveBlocks()"
           :style="{border: activeBlock ? '2px solid lightgreen' : 'none'}"  @dragstart="dragstart"></div>

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
import {mapActions} from "vuex";
export default {
  name: "ScheduleComponent",
  components: {leftMenu, ScheduleDashboard, ScheduleListOfDoctors},
  data() {
    return {
     activeBlock: false,
      selectedBlock: null,
    }
  },

  methods: {
    ...mapActions(["dragAndDrop"]),
    dragstart(){
      return false
    },
    moveBlocks(){
      this.dragAndDrop(event)
    },
    handleClickAnim: function (event){
        this.selectedBlock = event.target;


      if (this.selectedBlock.className === 'block') {

        this.activeBlock = true
      }

    },
    clearBorderBlock: function (event) {
      if (event.target.className !== 'block') {
        this.activeBlock = false
        this.selectedBlock = null
      }

    },


  }

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
  .block {
    border-radius: 1vh;
    width: 20vh;
    height: 4vh;
    background-color: #79798c;
  }

</style>