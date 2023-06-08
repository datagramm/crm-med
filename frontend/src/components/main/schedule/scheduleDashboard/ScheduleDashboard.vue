<template>
<div class="container-dashboard">
  <div class="user1">
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
  </div>
  <div class="user2">
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
    <div class="point1"></div>
  </div>





</div>
</template>

<script>
export default {
  name: "ScheduleDashboard"
}
</script>

<style scoped>
 .container-dashboard {
   flex-direction: column;
   display: flex;
   padding: 3vh;
   box-sizing: border-box;
   border: 2px solid white;
   border-radius: 1vh;
   background-color: #454050;
   width: 70%;
   height: 90%;

 }
 .point1 {
   color: white;
   clip-path: circle(40%);
   width: 0.5vh;
   height: 0.5vh;
   background-color: white;
 }
 .user1 , .user2 {
   justify-content: space-evenly;
   align-items: center;
   height: 5vh;
   width: 100%;
   display: flex;
 }

</style>