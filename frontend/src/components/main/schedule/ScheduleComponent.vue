<template>
  <div class="main-container"  >
    <leftMenu></leftMenu>
    <div class="right-component">
      <div class="block-spawn">
        <h3>Drag & drop card to create event</h3>
        <div class="sub-block-spawn">
        <div class="sub-platform"></div>
     <div class="block"
          v-for="card in getCards" :key="card"
          @click="handleClickAnim($event); moveBlocks({event: $event, cardId: card.id, cardDropped: card.dropped, border:card.border})"
          :style="{border: card.border  ? '2px solid lightgreen' : '2px solid white' }"
          @mouseup="card.border = false"
          @dragstart="dragstart">
       <div class="status" :style="{backgroundColor: card.colorStatus}"></div>
       <div class="main-content">
         <div class="tittle">{{card.tittleText}}</div>
         <div class="texts">
           <div class="image-patient"></div>
           <div class="time">00:34 h</div>
           <div class="text"> of some text</div>
         </div>

       </div>
       <transition name="fade">
         <div v-show="card.border" class="block-arrow-left" >
           <div class="arrow"></div>
           <div class="arrow"></div>
         </div>
       </transition>
       <transition name="fade">
       <div v-show="card.border" class="block-arrow-right">
         <div class="arrow"></div>
         <div class="arrow"></div>
       </div>
       </transition>
     </div>
      </div>
      <div class="sub-platform"></div>
      </div>

      <div class="timeline">
        <div class="time-line"></div>
        <div  v-for="hour in timeline" :key="hour"  class="sub-hour">
        <div class="point">{{hour}}</div>
        </div>
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
import {mapActions, mapGetters} from "vuex";
export default {
  name: "ScheduleComponent",
  components: {leftMenu, ScheduleDashboard, ScheduleListOfDoctors},
  data() {
    return {
      dropped: false,
      timeline: [8, '', 9, '', 10, '', 11, '', 12, '', 13, '', 14, '', 15, '', 16, '', 17]
    }
  },

  methods: {
    ...mapActions(["dragAndDrop"]),
    dragstart(){
      return false
    },
    moveBlocks(payload){
     this.dragAndDrop(payload)
    },

    handleClickAnim: function (){


    },
  },

  computed: mapGetters(['getCards'])

}
</script>

<style scoped>
.time-line {
  margin-top: 20px;
  position: absolute;
  background-color: darkblue;
  height: 5px;
  border-radius: 1vh;
}
.point {
  font-weight: bold;
  color: #56abfd;
  padding-bottom: 20px;
  box-sizing: border-box;
  width: 1vh;
  height: 1vh;

}
  .sub-hour{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .timeline {
    padding-left: 5px;
    box-sizing: border-box;
    margin-left: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
  }
  .sub-block-spawn {
    display: flex;
  }

  .sub-platform {
    height: 60px;
  }
  .right-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: flex-start;

  }
  .block-spawn {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    justify-items: flex-start;
    align-items: center;
    min-height: 80px;
    margin-left: 80px;
  }
  .schedule-sub {
    border-top: 4px solid white;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
    gap: 5px;
  }
  .block-arrow-left, .block-arrow-right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    width: 10px;
    height: 100%;
    background-color: #5a5aea;

  }
  .block-arrow-left {
    position: absolute;
    left: 0;
  }
  .block-arrow-right {
    position: absolute;
    right: 0;
  }
  .status {
    width: 5px;
    height: 30px;
    border-radius: 0.5vh;

  }
  .block {
    position: relative;
    padding-left: 12px;
    box-sizing: border-box;
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    transition: border 0.2s;
    border-radius: 1vh;
    width: 200px;
    height: 60px;
    background-color: #b2ccff;
  }

  .arrow {
    border-radius: 1vh;
    width: 1px;
    height: 8px;
    background-color: lightgray;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    gap: 3px;
  }
  .tittle {
    color: white;

  }
  .texts {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 10px;

  }
  .time {
    color: white;
    font-size: 10px;
  }
  .text {
    color: lightgray;
    font-size: 10px;
  }
  .image-patient {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: white;
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