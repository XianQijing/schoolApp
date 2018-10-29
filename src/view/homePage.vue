<template>
  <div class="homePage">
    <div class="home">
      <img src="../assets/location.png" alt="">
      <span>上海科技大学</span>
      <p>余额：750.3</p>
      <div class="menu">
        <div>
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
  </div>
</template>

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
}
</style>
