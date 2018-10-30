<template>
  <div class="personinfo">
    <div class="info">
      <div class="top_bar">
        <img src="../assets/img/setting.png" alt="">
      </div>
      <div class="name">xiaoguaishou</div>
      <img class="head" src="../assets/img/header.png" alt="">
    </div>
    <div class="function_list">
      <div class="span">
        <img src="../assets/img/one_card_manage.png" alt="">
        <span>一卡通管理</span>
      </div>
      <div class="span">
        <img src="../assets/img/chack_score.png" alt="">
        <span>成绩查询</span>
      </div>
      <div class="span">
        <img src="../assets/img/my_info.png" alt="">
        <span>我的资料</span>
      </div>
      <div class="span">
        <img src="../assets/img/comsum_center.png" alt="">
        <span>消费中心</span>
      </div>
    </div>
    <div class="list_link">
      <van-cell-group>
        <van-cell is-link v-for="(o, i) in list" :key="i">
          <template slot="title">
            <img style="vertical-align:middle;margin-right:0.05rem;" src="../assets/img/settings.png" width="20" alt="">
            <span class="van-cell-text">{{ o }}</span>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant'
export default {
  name: 'PersonInfo',
  data () {
    return {
      list: ['余额明细', '下载地址', '分享客户端', '常见问题', '设置', '意见反馈']
    }
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
}
</script>

<style lang="less" scoped>
.van-cell {
  // line-height: 0.25rem;
  padding: 0.15rem 0.15rem;
}
.personinfo {
  .info {
    background-image: url(../assets/img/bg.png);
    background-size: cover;
    width: 100%;
    height: 2.01rem;
    .top_bar {
      padding-top: 0.27rem;
      overflow: hidden;
      width: 100%;
      img {
        margin-right: 0.22rem;
        width: 3.7vw;
        display: block;
        float: right;
      }
    }
    .name {
      font-size: 0.16rem;
      line-height: 0.40rem;
      text-align: center;
      color: #fff;
    }
    .head {
      // position: absolute;
      width: 0.86rem;
      margin: 0.07rem auto 0;
      display: block;
      position: relative;
      z-index: 99;
    }
  }
  .function_list {
    width: 3.55rem;
    background-image: url(../assets/img/background_react.png);
    margin: -0.6rem auto 0;
    height: 1.26rem;
    position: relative;
    display: flex;
    justify-content: space-around;
    // align-items: center;
    .span {
      text-align: center;
      padding-top: 0.49rem;
    }
    img {
      width: 0.28rem;
      height: 0.28rem;
      display: block;
      margin: 0 auto;
    }
    span {
      font-size: 0.11rem;
      display: block;
      color: #333333;
      padding-top: 0.09rem;
    }
  }
}
</style>
