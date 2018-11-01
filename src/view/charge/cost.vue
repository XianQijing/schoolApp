<template>
  <div class="cost">
    <div class="Menu">
      <div class="main">
        <p>
          {{chargeType | title}}
        </p>
        <div v-if="chargeType === '1' || chargeType === '0'" class="type">
          <label>
            <input type="radio" name="feiyong" v-model="radio" value="水费">
            <div class="box">
              <div v-if="radio === '水费'"></div>
            </div>水费
          </label>
          <label>
            <input type="radio" name="feiyong" v-model="radio" value="电费">
            <div class="box">
              <div v-if="radio === '电费'"></div>
            </div>电费
          </label>
        </div>

        <div v-if="chargeType === '2' || chargeType === '3'" class="type">
          <label>
            <input type="radio" name="feiyong" v-model="radio" value="网费">
            <div class="box">
              <div v-if="radio === '网费'"></div>
            </div>网费
          </label>
          <label>
            <input type="radio" name="feiyong" v-model="radio" value="话费">
            <div class="box">
              <div v-if="radio === '话费'"></div>
            </div>话费
          </label>
        </div>

        <div v-if="radio !== '网费'">
          <div class="message">
            <p class="build">楼号</p>
            <p @click="show = true" class="label">{{build}}</p>
            <div class="arrow"></div>
          </div>
          <div class="message">
            <p class="build">宿舍号</p>
            <p @click="show = true" class="label">{{build}}</p>
            <div class="arrow"></div>
          </div>
          <div class="message">
            <p class="build">输入金额</p>
            <!-- <p @click="show = true" class="label">{{build}}</p> -->
            <input type="text" class="shuru">
          </div>
        </div>

        <div v-if="radio == '网费'">
          <div class="message ss">
            <input type="text">
          </div>
          <li v-for="(o, i) in list" :key="i" :class="{active: num === i}" @click="tab(i)">{{ o }}</li>
          <div class="auto_input" :class="{active: num === 7}">
            <span>输入金额：</span>
            <input type="number" v-model="money" @focus="tab(7)">
          </div>
        </div>
      </div>
      <button>立即缴费</button>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker :columns="columns" @change="onChange"/>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'cost',
  data () {
    return {
      radio: '水费',
      chargeType: '1',
      title: '',
      show: false,
      columns: ['杭州', '宁波sfsdfdfs', '温州', '嘉兴', '湖州'],
      build: '请选择楼号',
      list: ['20元', '30元', '50元', '60元', '100元', '200元'],
      num: 0,
      money: ''
    }
  },
  mounted () {
    this.chargeType = this.$route.query.type
    this.radio = costType(this.chargeType)
  },
  components: {
    [Toast.name]: Toast
  },
  filters: {
    title: function (value) {
      if (value === '1' || value === '0') return '生活缴费'
      if (value === '2' || value === '3') return '其他缴费'
    }
  },
  methods: {
    onChange (picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
      this.build = value
    },
    tab (i) {
      this.num = i
    }
  }
}
function costType (data) {
  if (data === '0') return '水费'
  if (data === '1') return '电费'
  if (data === '2') return '网费'
  if (data === '3') return '话费'
}
</script>

<style lang="less" scoped>
.cost {
  height: 100%;
  background-image: url('../../assets/bindBack.png');
  font-size: 0.16rem;
  font-weight:400;
  text-align: center;
  button {
    width: 3.15rem;
    height: 0.48rem;
    margin-top: 0.1rem;
    background:rgba(218,203,255,0.41);
    border: none;
    border-radius: 0.05rem;
  }
  .main {
    width: 3.15rem;
    height: 3.57rem;
    background:rgba(218,203,255,0.41);
    margin: auto;
    border-radius: 0.1rem;
    font-weight:400;
    color: #FFFFFF;
    text-align: left;
    p {
      padding-left: 0.11rem;
      padding-top: 0.11rem;
      font-size: 0.18rem;
    }
    input[type=radio]{
      width: 0.16rem;
      position: relative;
      left: 0.25rem;
      height: 0.2rem;
      width: 0.2rem;
      opacity: 0;
    }
    .box {
      display: inline-block;
      width: 0.2rem;
      height: 0.2rem;
      border: 0.01rem solid #ffffff;
      border-radius: 0.5rem;
      vertical-align: text-top;
      margin-right: 0.09rem;
      div {
        margin-top: 0.02rem;
        margin-left: 0.02rem;
        background-color: #D39DFF;
        height: 0.16rem;
        width: 0.16rem;
        border-radius: 0.5rem;
      }
    }
    .type {
      margin-top: 0.2rem;
      font-size: 0.17rem;
      label:nth-child(2){
        margin-right: 0.5rem;
      }
      display: flex;
      justify-content: space-between;
    }
    .ss {
      height: 0.5rem!important;
    }
    .message {
      margin: 0 0.19rem;
      border-bottom: 1px solid #d6d5d5;
      font-size: 0.18rem;
      height: 0.7rem;
      input {
        width: 2.2rem;
        padding: 0 0.05rem;
        border: none;
        border-radius: 0;
        background: none;
        text-align: left;
        height: 99%;
      }
      .build {
        line-height: 0.6rem;
        // vertical-align: top;
        width: 0.9rem;
        text-align: left;
        display: inline-block;
      }
      .label {
        width: 1rem;
        text-align: left;
        display: inline-block;
        padding: 0;
        // height: 0.62rem;
        // vertical-align: bottom;
      }
      .arrow {
        border-top: #ffffff solid 0.01rem;
        border-right: #ffffff solid 0.01rem;
        margin-top: 0.4rem;
        width: 0.08rem;
        height: 0.08rem;
      }
      .shuru{
        width: 0.9rem !important;
        text-align: left;
      }
    }
  }
}
li {
      margin-right: 0.12rem;
      &:nth-of-type(1) {
        margin-left: 0.13rem;
      }
      &:nth-of-type(4) {
        margin-left: 0.13rem;
      }
      list-style: none;
      float: left;
      width: 0.88rem;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      border-radius:0.05rem;;
      // border:1px solid rgba(0,0,0,0.21);
      margin-top: 0.16rem;
      color: #898989;
      background: rgba(156, 142, 236, 0.125);
    }
  .auto_input {
    position: relative;
    top: 0.3rem;
    clear: both;
    width: 2.9rem;
    height:0.48rem;
    line-height:0.48rem;
    border-radius: 1.53vw;
    margin: 0 auto;
    padding-left: 2vw;
    overflow: hidden;
    color: #898989;
    // margin-top: 0.42rem;
    background: rgba(82,76,134,0.46);
    input {
      border: 0;
      line-height:12vw;
      font-size: 3.5vw;
      outline: none;
      width: 2rem;
      // float: right;
      border-radius: 0;
      padding: 0;
      background: none;
    }
  }
  .active {
    background:#9e8eed;
    color: #fff;
    // border-color:rgba(63,71,90,1);
  }
</style>
