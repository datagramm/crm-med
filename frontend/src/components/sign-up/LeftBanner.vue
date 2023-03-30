<template>
<div class="banner">
<SliderPreview></SliderPreview>
</div>
</template>

<script>
import SliderPreview from "@/components/slider-preview/SliderPreview.vue";

export default {
  name: "LeftBanner",
  components: {SliderPreview}
}
</script>

<style lang="scss" scoped>
  .banner {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    min-width: 586px;
    height: 100%;
    background-image:linear-gradient(180deg, rgba(98, 142, 255, 0.8) 0%, rgba(23, 56, 141, 0.8) 100%), url("~@/assets/photo/signup-background-image.jpg");
    background-position: center;
    background-size: cover;
    background-position-y: 0%;
    background-position-x: 40%;
  }


</style>