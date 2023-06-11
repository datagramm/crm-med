<template>
  <div class="main-container"  >
    <leftMenu></leftMenu>
    <div class="right-component">
     <div class="block"
          @click="handleClickAnim($event); moveBlocks($event)"
          @mousedown="animationBlock = false"
          @mouseup="activeBlock = false"
          :style="{border: activeBlock ? '2px solid lightgreen' : '1px solid grey' }"
          @dragstart="dragstart">
       <transition name="fade">
         <div v-show="activeBlock" class="block-arrow-left" @mouseup="activeBlock = false" ></div>
       </transition>
       <transition name="fade">
       <div v-show="activeBlock" class="block-arrow-right"></div>
       </transition>
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }


</style>