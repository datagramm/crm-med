<template>
  <div class="main-container">
    <leftMenu></leftMenu>
    <div class="right-component"></div>
  </div>
</template>


<script>
import leftMenu from "@/components/main/leftMenuItem/leftMenu";

export default {
  name: "DashBoard",
  components: {leftMenu}
}
</script>

<style>
.main-container {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100vh;
}

.right-component {

  width: inherit;
  height: 100%;
  background: rgba(243, 243, 243, 0.99);

}

</style>