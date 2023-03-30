<template>
<div class="slider">
  <transition name="fade">
<div v-if="transition" class="text-group">

  <h2>{{currentText.tittle}}</h2>
  <h3>{{currentText.text}}</h3>
</div>
  </transition>
  <div class="navigation">
    <a class="left-arrow" @click="prev"></a>
    <div class="pagination" >
    <span  class="dots" v-for="(text , index) in allTexts" :key="text" :class="{ active: index === currentSlide}" @click="showCurrentSlide(index)"></span>
    </div>
    <a class="right-arrow" @click="next"></a>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
  name: "SliderPreview",
  methods: mapActions(['prev', "next", 'showCurrentSlide', 'autoSlide']),
  mounted() {
    this.autoSlide()
  },
  computed: mapGetters(["allTexts", "currentText", "transition", "currentSlide"])
}
</script>

<style lang="scss" scoped>
.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 30%;

}
.navigation {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 4vh;
}


.left-arrow, .right-arrow {
  display: flex;
  width: 6vh;
  height: 6vh;
  background: url("~@/assets/photo/_Carousel arrow.svg");
  background-size: contain;
}
.left-arrow {
  transform: scale(-1,1);
}
@font-face {
  font-family: 'Inter';
  src: url("~@/assets/fonts/Inter-VariableFont_slnt,wght.ttf");
}
.text-group {
  font-family: 'Inter';
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
.dots {
  color: transparent;
  width: 1vh;
  height: 1vh;
  opacity: 0.25;
  border-radius: 100%;
  background: white;
}
.pagination {
  display: flex;
  gap: 1vh;

}
h2{
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  padding: 0;
  margin: 0;
}
h3{
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.fade-enter-active,
 {
  transition: opacity 0.150s ease;
}

.fade-enter-from{
  opacity: 0;
}
.active {
  opacity: 1;
}

</style>