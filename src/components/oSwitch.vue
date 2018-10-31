<template>
  <div class="oSwitch">
    <p class="circle" id="circle"></p>
    <input type="checkbox" v-model="checked">
    {{checked}}
  </div>
</template>

<script>
export default {
  name: 'oSwitch',
  data () {
    return {
      checked: false
    }
  },
  watch: {
    checked (val) {
      if (val === true) {
        document.getElementById('circle').style.left = 0.2 + 'rem';
      } else {
        document.getElementById('circle').style.left = 0 + 'rem';
      }
    }
  }
}
</script>

<style lang="less" scoped>
.oSwitch {
  font-size: 0.16rem;
  background: white;
  display: inline-block;
  border-radius: 0.5rem;
  padding: 0.02rem 0.01rem 0.01rem 0.01rem;
  position: relative;
  .circle {
    background: green;
    height: 0.29rem;
    width: 0.29rem;
    border-radius: 0.5rem;
    position: relative;
    transition: all 0.2s;
  }
  input {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    opacity: 0;
  }
}
</style>
