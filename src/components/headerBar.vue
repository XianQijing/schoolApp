<template>
    <div class="headerBar">
      <div class="backArrow" @click="goBack"></div>
      <p>{{title}}</p>
    </div>
</template>

<script>
export default {
  name: 'headerBar',
  props: ['title'],
  methods: {
    goBack () {
      window.history.back()
    }
  }
}
</script>

<style lang="less" scoped>
.headerBar {
  font-size: 0.16rem;
  text-align: center;
  height: 0.64rem;
  position: fixed;
  width: 100%;
  // box-shadow:0px 1px 4px 0px rgba(53,52,83,0.3);
  .backArrow {
    transform: rotate(225deg);
    width: 0.10rem;
    height: 0.10rem;
    border-top: #007AFF 0.03rem solid;
    border-right: #007AFF 0.03rem solid;
    line-height: 0.64rem;
    float: left;
    margin-left: 0.08rem;
    margin-top: 0.38rem;
  }
  p {
    text-align: center;
    display: inline-block;
    vertical-align: text-top;
    color: #FFFFFF;
    font-size: 0.17rem;
    margin-top: 0.33rem;
  }
}
</style>
