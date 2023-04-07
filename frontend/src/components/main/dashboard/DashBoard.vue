<template>
  <div class="main-container">
  <leftMenu></leftMenu>
<div class="dash-board"></div>
  </div>
</template>


<script>
import leftMenu from "@/components/main/dashboard/leftMenuItem/leftMenu";
export default {
  name: "DashBoard",
  components: {leftMenu}
}
</script>

<style scoped>
.main-container {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100vh;
}
.dash-board{

  width: inherit;
  height: 100%;
  background: rgba(243, 243, 243, 0.99);

}

</style>