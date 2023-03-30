<template>
<div class="circle-tooltip">
  <div class="access" v-if="!stateTooltip">
    <div class="icon-access"></div>
  </div>
  <div class="denied" v-if="stateTooltip">
    <div class="icon-denied"> </div>
  </div>
</div>
</template>

<script>


export default {
  name: "CircleTooltip",
  props: {
    stateTooltip: {
      type: Boolean,
      required: false,
    },
  },

}
</script>


<style lang="scss" scoped>
circle-tooltip {
  width: 3vh;
  height: 3vh;


}
.access, .denied {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("~@/assets/photo/access.svg");
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;

}
.denied {
  background: url("~@/assets/photo/denied.svg");
  background-repeat: no-repeat;
  background-position: center;

}


</style>