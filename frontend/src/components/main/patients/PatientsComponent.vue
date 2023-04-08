<template>
  <div class="main-container">
  <leftMenu></leftMenu>
    <div class="right-component"></div>
  </div>
</template>

<script>
import leftMenu from "@/components/main/leftMenuItem/leftMenu.vue";
export default {
  name: "PatientsComponent",
  components: {leftMenu}
}
</script>

<style scoped>

</style>