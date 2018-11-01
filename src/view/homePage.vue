<template>
  <div class="homePage">
    <div class="home">
      <img src="../assets/location.png" alt="">
      <span>上海科技大学</span>
      <p>余额：750.3</p>
      <div class="menu">
        <div @click="$router.push('/card')">
          <img src="../assets/card.png" alt="">
          <p style="color: #5BE2FF;">一卡通</p>
        </div>
        <div @click="$router.push('/charge')">
          <img src="../assets/money.png" alt="">
          <p style="color: #FF8F65;">缴费</p>
        </div>
        <div>
          <img src="../assets/recharge.png" alt="">
          <p style="color: #AA70FF;">充值</p>
        </div>
        <div>
          <img src="../assets/job.png" alt="">
          <p style="color: #FFBF96;">求职</p>
        </div>
        <div>
          <img src="../assets/examination.png" alt="">
          <p style="color: #FF8EEF;">考试</p>
        </div>
        <div>
          <img src="../assets/lost.png" alt="">
          <p style="color: #7ADF7D;">失物招领</p>
        </div>
      </div>
    </div>
    <van-popup v-model="show">
      <div @click="show = false" class="close"><span>×&nbsp;&nbsp;&nbsp;</span></div>
      <img src="../assets/bind.png" alt="">
      <p>为了你能体验你的所有功能，请绑定<br/>你的一卡通哦。</p>
      <button>立即绑定</button>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="less" scoped>
.homePage {
  background-image: url('../assets/homePage.png');
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  // padding-bottom: 0.95rem;
  .home {
    padding-top: 0.41rem;
    font-size: 0.18rem;
    color: #FFFFFF;
    font-family: 'PingFangSC-Semibold';
    width: 3.46rem;
    margin: 0 auto;
    padding-bottom: 0.95rem;
    span {
      vertical-align: top;
    }
    img {
      width: 0.17rem;
    }
    p {
      font-size: 0.12rem;
      margin-left: 0.24rem;
      font-family: 'PingFang-SC-Medium';
    }
    .menu {
      display: flex;
      justify-content: space-between;
      flex-wrap:wrap;
      div{
        width: 1.65rem;
        background:rgba(42,45,91,0.77);
        border-radius:0.3rem;
        height: 1.47rem;
        text-align: center;
        margin-top: 0.15rem;
        display: inline-block;
        img{
          width: 0.48rem;
          margin: 0.26rem 0 0.4rem 0;
        }
        p{
          margin: 0;
          font-size: 0.14rem;
        }
      }
    }
  }
  .van-popup{
    width: 3.1rem;
    height: 3.32rem;
    border-radius: 0.1rem;
    overflow: hidden;
    font-size: 0.15rem;
    text-align: center;
    .close {
      position: relative;
      font-size: 0.32rem;
      color: white;
      background: #DBDBDB;
      height: 0.88rem;
      width: 0.88rem;
      border-radius:0.50rem;
      float: right;
      right: -0.44rem;
      top: -0.44rem;
      text-align: center;
      span {
        line-height: 1.2rem;
      }
    }
    img {
      width: 1.43rem;
      height: 1.61rem;
      position: relative;
      top: 0.2rem;
      left: 0.5rem;
    }
    p {
      font-size: 0.18rem;
      text-align: center;
      width: 100%;
      margin-top: 0.3rem;
    }
    button {
      height: 0.36rem;
      width: 2.38rem;
      font-size: 0.15rem;
      margin-top: 0.25rem;
      border-radius: 0.5rem;
      border: none;
      color: white;
      background:linear-gradient(185deg,rgba(255,150,190,0.94),rgba(154,9,247,0.94));

    }
  }
}
</style>
