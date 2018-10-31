<template>
  <div class="tuition">
    <header-bar :title="'学杂费'" />
    <div class="tab_bar">
      <figure :class="{active: 1 === num}" @click="tab(1)">
        <img v-if="num === 2" src="../assets/img/wait_a.png">
        <img v-if="num === 1" src="../assets/img/wait.png">
        <span>待缴费</span>
      </figure>
      <figure :class="{active: 2 === num}" @click="tab(2)">
        <img v-if="num === 1" src="../assets/img/ok_alerdy.png">
        <img v-if="num === 2" src="../assets/img/ok.png">
        <span>已缴费</span>
      </figure>
    </div>
    <div class="content" v-if="num === 1">
      <div class="list">
        <h2>
          <img src="../assets/img/money.png" alt="">
          <span>2018年第二学期学杂费</span>
          <span style="float:right;">8，000</span>
        </h2>
        <div>[学杂费]</div>
        <p>
          <img src="../assets/img/person.png" alt="">
          <span>学生姓名：凌凌漆</span>
          <span style="float:right;">班级：光伏16班</span>
        </p>
      </div>
      <div class="list">
        <h2>
          <img src="../assets/img/money.png" alt="">
          <span>2018年第二学期学杂费</span>
          <span style="float:right;">8，000</span>
        </h2>
        <div>[学杂费]</div>
        <p>
          <img src="../assets/img/person.png" alt="">
          <span>学生姓名：凌凌漆</span>
          <span style="float:right;">班级：光伏16班</span>
        </p>
      </div>
    </div>
    <div class="content" v-if="num === 2">
      <div class="already_list">
        <div class="img">
          <img src="../assets/img/star.png" alt="">
          <span>完成</span>
        </div>
        <div class="word">
          <h2>
            <span>2018年第二学期学杂费</span>
            <span style="float:right;">8，000</span>
          </h2>
          <div>[学杂费]</div>
          <p>
            <span>学生姓名：凌凌漆</span>
            <span style="float:right;">班级：光伏16班</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerBar'
export default {
  name: 'Tuition',
  data () {
    return {
      num: 2
    }
  },
  methods: {
    tab (num) {
      this.num = num
    }
  },
  components: {
    HeaderBar
  }
}
</script>

<style lang="less" scoped>
.tuition {
  overflow: auto;
  background-color:rgba(72,72,111,0.3);
  background-image: url('../assets/bindBack.png');
  height: 100%;
  .tab_bar {
    padding-top: 0.64rem;
    color: #8F8F8F;
    font-size: 0.16rem;
    overflow: hidden;
    figure {
      width: 50%;
      float: left;
      text-align: center;
      height: 0.48rem;
      line-height: 0.48rem;
      background: #4E3781;
      &.active {
        border-bottom: 0.02rem solid #6528FF;
        box-sizing: border-box;
        color: #fff;
      }
    }
    img {
      width: 0.16rem;
      vertical-align: middle;
    }
  }
  .content {
    padding-top: 0.3rem;
    .list {
      width: 3.45rem;
      height: 0.73rem;
      margin: 0 auto 0.08rem;
      background-image: url(../assets/img/radius.png);
      font-size: 0.12rem;
      color: #fff;
      font-family:PingFang-SC-Bold;
      h2 {
        font-size: 0.16rem;
        line-height: 0.16rem;
        padding: 0.12rem 0.12rem 0;
        img {
          width: 0.16rem;
          vertical-align: middle;
        }
      }
      div {
        padding-left: 0.32rem;
        line-height: 0.18rem;
      }
      p {
        padding: 0 0.12rem 0.06rem;
        img {
          width: 0.16rem;
          vertical-align: middle;
        }
      }
    }
    .already_list {
      width: 3.45rem;
      height: 0.73rem;
      margin: 0 auto 0.08rem;
      background-image: url(../assets/img/radius.png);
      font-size: 0.12rem;
      color: #fff;
      font-family:PingFang-SC-Bold;
      .img {
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 50%;
        float: left;
        background: #fff;
        text-align: center;
        margin: 0.15rem 0.1rem 0 0.05rem;
        img {
          width: 0.24rem;
          display: block;
          margin: 0.06rem auto 0;
        }
        span {
          font-size: 0.09rem;
          font-family:PingFang-SC-Medium;
          color:rgba(255,255,255,1);
          text-shadow:0px 8px 15px rgba(100,0,185,0.29);
          background:linear-gradient(0deg,rgba(255,154,242,1) 0%, rgba(255,73,223,1) 100%);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
      }
      .word {
        h2 {
          font-size: 0.16rem;
          line-height: 0.16rem;
          padding: 0.12rem 0.12rem 0;
        }
        div {
          padding-left: 0.32rem;
          line-height: 0.22rem;
        }
        p {
          padding: 0 0.12rem 0.06rem;
        }
      }
    }
  }
}
</style>
