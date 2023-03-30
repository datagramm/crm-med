<template>
<div class="sign-up-container">
  <RightSectionSignIn></RightSectionSignIn>
  <LeftBanner class="left-banner"></LeftBanner>
</div>
</template>

<script>
import LeftBanner from "@/components/sign-up/LeftBanner.vue";
import RightSectionSignIn from "@/components/sign-in/RightSectionSignIn.vue";

export default {
  name: "SignIn",
  components: {RightSectionSignIn, LeftBanner}
}
</script>

<style  lang="scss" scoped>
.sign-up-container {
  display: flex;
  width: 100%;
  height: 100vh;

}
@media only screen
and (max-width : 1224px) {
  .left-banner {
    display: none;
  }
}
</style>