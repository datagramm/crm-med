<template>

  <router-link :to="item.path" exact-active-class="exact-active" class="left-menu-item">
    <div class="item-logo"
         v-bind:style="{ 'mask-image': 'url(' + require(`@/assets/photo/logo/${item.logo}`) + ')' }"></div>
    <div class="text-name">{{ item.name }}</div>
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

<style lang="scss" scoped>
.left-menu-item {
  text-decoration: none;
  width: 197px;
  height: 40px;
  box-sizing: border-box;
  padding-left: 13px;
  gap: 9px;
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
  background-color: rgba(52, 64, 84, 1);
  display: flex;
  width: 24px;
  height: 24px;
  mask-position: center;
  mask-repeat: no-repeat;
}

.exact-active {
  background: #EFF4FF;
  border-radius: 6px;
  .item-logo {
    background-color: rgba(41, 112, 255, 1);
  }

  .text-name {
    color: #2970FF;
  }

}


</style>