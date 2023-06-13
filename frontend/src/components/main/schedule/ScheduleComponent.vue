<template>
  <div class="main-container"  >
    <leftMenu></leftMenu>
    <div class="right-component">
     <div class="block"
          v-for="card in getCards" :key="card"
          @click="handleClickAnim($event); moveBlocks({event: $event, cardId: card.id, cardDropped: card.dropped, border:card.border})"
          :style="{border: card.border  ? '2px solid lightgreen' : '1px solid grey' }"
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
      cards: [{
        id: '1'
      }],
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    width: 10px;
    height: 100%;
    background-color: #454050;

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
    padding-left: 12px;
    box-sizing: border-box;
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    position: relative;
    align-items: center;
    overflow: hidden;
    transition: border 0.2s;
    border-radius: 1vh;
    width: 200px;
    height: 60px;
    background-color: #79798c;
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