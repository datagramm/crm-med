<template>
<div class="sign-up-container">

  <RightSectionSignUp  class="right-section"></RightSectionSignUp>
  <LeftBanner class="left-banner"></LeftBanner>
</div>
</template>

<script>
import LeftBanner from "@/components/sign-up/LeftBanner.vue";

import RightSectionSignUp from "@/components/sign-up/RightSectionSignUp.vue";

export default {
  name: "SignUp",
  components: {RightSectionSignUp, LeftBanner},
}
</script>

<style lang="scss" scoped>
 .sign-up-container {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100vh;
   overflow: hidden;
 }




 @media only screen
 and (max-width : 1224px) {
   .left-banner {
     display: none;
   }
 }

</style>