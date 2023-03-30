<template>
  <div class="container">
    <div class="logo"></div>
    <div class="horizontal-tab">
      <router-link to="/sign-up" class="link">
        <button class="sign-button active">Sign Up</button>
      </router-link>
      <router-link to="/sign-in" class="link">
        <button class="sign-button active" value="Sign In">Sign In</button>
      </router-link>
    </div>
    <div class="data-input">
      <span>Email</span>
      <input type="text">
    </div>

    <div class="data-input">
      <span>Password</span>
      <input type="password">
    </div>

    <div class="data-input">
      <input type="submit" value="Continue" class="submit" style="cursor: pointer">
    </div>
    <div class="sign-google">
      <div class="google-icon"></div>
      Sign in with Google
    </div>

  </div>
</template>

<script>
export default {
  name: "RightSectionSignIn"
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 92px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: inherit;
  height: 100%;
  gap: 28px;
}

.logo {
  display: flex;
  width: 184px;
  min-height: 10%;
  background-image: url("~@/assets/photo/Logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
}

.horizontal-tab {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px;
  gap: 8px;

  width: 512px;
  height: 56px;

  /* Gray/100 */

  background: #F2F4F7;
  /* Gray/100 */

  border: 1px solid #F2F4F7;
  border-radius: 8px;
}

.sign-button {

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 44px;
  gap: 8px;
  border: none;
  background: #F2F4F7;
  border-radius: 6px;
  color:  #667085;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
  width: 60px;

  /* Text md/Medium */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */


  /* Gray/700 */

}

.router-link-exact-active {
  .active {

    background: #FFFFFF;
    /* Shadow/sm */
    color: #344054;
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);

  }
}


.link {
  display: flex;
  width: inherit;
  text-decoration: none;
}

@font-face {
  font-family: 'Inter';
  src: url("~@/assets/fonts/Inter-VariableFont_slnt,wght.ttf");
}

.data-input {
  position: relative;
  display: flex;
  width: 512px;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;
  height: fit-content;
}

input {

  box-sizing: border-box;
  height: 48px;
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 6px;


  /* Base/White */

  background: #FFFFFF;
  /* Gray/300 */

  border: 1px solid #D0D5DD;
  border-radius: 8px;

  /* Inside auto layout */


  order: 1;
  align-self: stretch;
  flex-grow: 1;

}

span {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */


  /* Gray/700 */

  color: #344054;


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

.data-input > div {
  max-width: 50%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex-grow: 1;
}

.submit {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #628EFF;
  border: 1px solid #628EFF;
  /* Text lg/Medium */

  font-family: 'Inter';
  font-style: normal;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */


  /* Base/White */

  color: #FFFFFF;


}

.submit:hover {
  background: rgba(76, 124, 249, 1);
}

.google-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 3vh;
  height: 3vh;
  background: url("~@/assets/photo/Social icon.svg");
  background-repeat: no-repeat;
  background-size: contain;
}

.sign-google {
  cursor: pointer;
  display: flex;
  width: 512px;
  height: 48px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 6px;

  border: 1px solid #D0D5DD;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */


  /* Gray/700 */

  color: #344054;
}

button {
  cursor: pointer;
}

input:focus {
  outline: none !important;
  border: 1px solid rgba(178, 204, 255, 1);
  box-shadow: 0 0 0 3px rgba(181, 205, 252, 0.3);
}
.passport-tooltip {
  position: absolute;
  right: -21vh;




}

.sub {
  width: 100% !important;
  max-width: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.data-input-sub {
  display: flex;
  gap: 6px;
}
input:disabled,  {
  background: #628EFF;
  opacity: 0.3;
  cursor: not-allowed !important;
}

@media only screen

and (max-width : 768px) {
  .data-input, .horizontal-tab, .sign-google{
    width: 80%;
  }


}

@media only screen

and (max-height : 900px) {
  input, .horizontal-tab {
    height: 6vh;
  }
  .sign-button{
    height: 5vh;
  }

  .container {
    gap: 1vh;
  }


}



</style>