<template>
  <div class="pay">
    <header-bar></header-bar>
    <div class="Menu">
      <p>默认付款方式</p>
      <div class="code">
        <p>付款码</p>
        <img src="../assets/code.png" alt="">
      </div>
      <div class="aa">
        <p>支付记录</p>
        <div>
          <img src="../assets/saoyisao.png" alt="">
          <p>扫码</p>
        </div>
        <p>我的钱包</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerBar'
export default {
  name: 'pay',
  data () {
    return {
      checked: false
    }
  },
  components: {
    HeaderBar
  }
}
</script>

<style lang="less" scoped>
.pay {
  background-image: url('../assets/bindBack.png');
  height: 100%;
  width: 100%;
  overflow: auto;
  .Menu{
    margin: 0 auto;
    width: 3.03rem;
    overflow: auto;
    font-size: 0.16rem;
    p {
      text-align: right;
    }
    .code {
      margin-top: 0.2rem;
      width: 100%;
      height: 3.33rem;
      background-image: url('../assets/codeBack.png');
      text-align: center;
      p {
        color: black;
        text-align: center;
        font-size: 0.18rem;
        padding-top: 0.18rem;
      }
      img {
        width: 2.1rem;
        margin-top: 0.23rem;
      }
    }
    .aa {
      display: flex;
      justify-content: space-around;
      font-weight: 200;
      margin-top: 0.21rem;
      font-size: 0.15rem;
      img {
        width: 0.26rem;
      }
      div {
        text-align: center;
        font-size: 0.12rem;
      }
    }
  }
}
</style>
