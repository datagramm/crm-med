<template>
<div class="tooltip" v-if="getTooltips[this.name]">

  <div class="triangle">
  </div>
    {{message}}


</div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PasswordRequireTooltip",
  props: {
    message: {
      type: String,
      required: true,
    },
    value1: {
      type: String,
      required: true,
    },
    value2: {
      type: String,
      required: true,
    },
    value3: {
      type: Boolean,
      required: true,
    },
    function: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    }




  },
  watch: {
  value1: {
    deep: true,
    handler: function(){
      this.compare()
    },
  } ,
    value2: {
    deep: true,
      handler: function(){
        this.compare()
      }
    },
    value3: {
      deep: true,
      handler: function(){
        this.compare()
      }
    },

  },
  methods:{
    ...mapActions(['addNewTooltip']),
      compare(){
        if (this.function === 'checkPass'){
          let specialCharacter = /^((?=.*[0-9])(?=.*[а-я])(?=.*[А-Я]).{8,})|((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,})$/
          if (this.value1 === '') return  this.getTooltips[this.name] = false
          if (this.value1.search(specialCharacter) ){
           return this.getTooltips[this.name] = true
          }
          this.getTooltips[this.name] = false

        }
        if (this.function === 'compareTwoPass') {
          if (this.value2 === '' || this.value1 === '') return  this.getTooltips[this.name] = false
          if (this.value1 !== this.value2) {
            return this.getTooltips[this.name] = true
          }
          this.getTooltips[this.name] = false

        }
        if (this.function === 'checkPassInBD') {
          if (!this.value3) return  this.getTooltips[this.name] = true
          this.getTooltips[this.name] = false
        }


      }
  },
  mounted() {
    this.addNewTooltip(this.name)
  },
  computed: mapGetters(['getTooltips']),

}
</script>

<style scoped>
.tooltip {
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #101828;
  padding: 8px 12px;
  width: 13vh;
  height: fit-content;
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  /* or 164% */

  letter-spacing: -0.01em;

  /* Base/White */

  color: #FFFFFF;


  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.triangle {
  z-index: 0;
  left: -5px;
  width: 12px;
  height: 12px;
  position: absolute;
  border-radius: 1px;
  transform: rotateZ(45deg);
  background: #101828;
}


</style>