<template>
  <div class="charge">
    <header-bar />
    <div class="Menu">
      <p style="margin-top: 0;">学习缴费</p>
      <div class="select">
        <div>
          <img src="../assets/xueza.png" alt="">
          <p style="color:#5BE2FF;">学杂费</p>
        </div>
        <div>
          <img src="../assets/jineng.png" alt="">
          <p style="color:#AA80FF;">技能证</p>
        </div>
      </div>
      <p>生活缴费</p>
      <div class="select">
        <div>
          <img src="../assets/shuifei.png" alt="">
          <p style="color:#AA80FF">水费</p>
        </div>
        <div>
          <img src="../assets/dianfei.png" alt="">
          <p style="color:#F6A25D">电费</p>
        </div>
      </div>
      <p>其他缴费</p>
      <div class="select">
        <div>
          <img src="../assets/xueza.png" alt="">
          <p style="color:#7E82FE">网费</p>
        </div>
        <div>
          <img src="../assets/huafei.png" alt="">
          <p style="color:#FFCF66">话费</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerBar'
export default {
  name: 'charge',
  components: {
    HeaderBar
  }
}
</script>

<style lang="less" scoped>
.charge {
  overflow: auto;
  background-color:rgba(72,72,111,0.3);
  background-image: url('../assets/bindBack.png');
  height: 100%;
  .Menu {
    .select {
      padding-left: 0.84rem;
      padding-right: 0.9rem;
      display: flex;
      justify-content: space-between;
      div {
        padding-top: 0.2rem;
        text-align: center;
        img {
          width: 0.54rem;
          height: 0.54rem;
        }
        p {
          margin: 0;
          font-size: 0.14rem;
        }
      }
    }
    p {
      margin-top: 0.67rem;
      margin-left: 0.13rem;
    }
  }
  .headerBar {
    background: rgba(72,72,111,0.7);
    box-shadow:0px 1px 4px 0px rgba(53,52,83,0.3);
  }
}
</style>
