<template>

  <router-link to="/patients" exact-active-class="exact-active" class="left-menu-item">
  <div class="item-logo"  v-bind:style="{ 'background-image': 'url(' + require(`@/assets/photo/logo/${item.logo}`) + ')' }" ></div>
  <div class="text-name" >{{item.name}}</div>
  </router-link>

</template>

<script>
export default {
  name: "leftMenuItem",
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
.left-menu-item {
  width: 197px;
  height: 40px;
  box-sizing: border-box;
  padding-left: 15px;
  gap: 11px;
  display: flex;
  align-items: center;
}
.text-name {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */


  /* Gray/700 */

  color: #344054;


  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
}
.item-logo {
  display: flex;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
}


</style>