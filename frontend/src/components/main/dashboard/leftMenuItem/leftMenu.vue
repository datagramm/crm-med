<template>
  <div class="left-side-menu">
    <div class="logo"></div>
    <div class="menu-item">
        <leftMenuItem v-for="item in items" :key="item" :item="item" ></leftMenuItem>
    </div>
  </div>

</template>

<script>
import leftMenuItem from "@/components/main/dashboard/leftMenuItem/leftMenuItem";

export default {
  name: "leftMenu",
  components: {leftMenuItem},
  data() {
    return {
      items: [
        {name: 'Dashboard', logo: "dashboardLogo.svg"},
        {name: 'Schedule', logo: "scheduleLogo.svg"},
        {name: 'Patients', logo: "patientLogo.svg"},
        {name: 'Doctors', logo: "doctorLogo.svg"},
        {name: 'Finances', logo: "financesLogo.svg"},


      ],
    }
  },
}
</script>

<style scoped>
.left-side-menu {
  box-sizing: border-box;
  padding: 24px;
  min-width: 245px;
  height: 100%;
  background: #FFFFFF;
  border-right: 1px solid #F1F2F4;
}
.menu-item{

  height: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.logo {
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  width: 147px;
  min-height: 41px;
  background-image: url("~@/assets/photo/Logo (1).svg");
  background-size: contain;
  background-repeat: no-repeat;
}
.exact-active {
  background: #EFF4FF;
  border-radius: 6px;
}
</style>