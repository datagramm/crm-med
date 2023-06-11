<template>
  <div class="main-container"  >
    <leftMenu></leftMenu>
    <div class="right-component">
     <div class="block"
          @click="handleClickAnim($event); moveBlocks($event)"
          @mousedown="animationBlock = false"
          @mouseup="activeBlock = false"
          :class="{'shake': animationBlock}"
          :style="{border: activeBlock ? '2px solid lightgreen' : '1px solid grey' }"
          @dragstart="dragstart">
       <div class="block-arrow-left" @mouseup="activeBlock = false" ></div>
       <div class="block-arrow-right"></div>

     </div>

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
      animationBlock: false,
     activeBlock: false,

    }
  },

  methods: {
    ...mapActions(["dragAndDrop"]),
    dragstart(){
      return false
    },
    moveBlocks(event){
      this.dragAndDrop(event)
    },
    handleClickAnim: function (){


        this.animationBlock = true
        this.activeBlock = true


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
  .block-arrow-left, .block-arrow-right {
    width: 10px;
    height: 100%;
    background-color: #454050;

  }
  .block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    transition: border 0.2s;
    border-radius: 1vh;
    width: 180px;
    height: 50px;
    background-color: #79798c;
  }
  .shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;

  }

  @keyframes shake {
    0% {
      width: 170px;
      height: 40px;
    }
    50% {
      width: 190px;
      height: 60px;
    }
    100% {
      width: 180px;
      height: 50px;
    }
  }

</style>